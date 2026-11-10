"use client";

import { useEffect, useRef } from "react";

/*
  The hero's 3D liquid: raymarched metaballs in a WebGL2 fragment shader, ported from the approved
  "Noche en movimiento" design (Movimiento.dc.html: shaderStage + FRAG) with raw WebGL2.

  - WebGL2 draws into an offscreen canvas and each frame is copied onto the visible 2D canvas, so the
    last frame stays on screen while the GL context sleeps (off-screen) or is lost.
  - Device pixel ratio capped at 1.5, about 2 megapixels at most, and an adaptive level that drops
    the resolution while frames run slow and climbs back when they recover.
  - Paused off-screen (IntersectionObserver); the GL context is released after 1.5 s away.
  - prefers-reduced-motion: a still frame (time and scroll stop; the pointer can still move it).
  - Without WebGL2 nothing is drawn: the canvas area keeps the ground colour, with no error UI.
*/

const GROUND = "#0C0C0E";

type Value = number | string | number[];
type Uniforms = Record<string, Value>;

function uniforms(): Uniforms {
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scroll = calm ? 0 : Math.round(Math.min(1, Math.max(0, window.scrollY / 700)) * 100) / 100;
  return {
    speed: 1.6,
    uGround: GROUND,
    uGlow: "#FF7A2F",
    uGlow2: "#FFB547",
    uBody: "#1C1C21",
    uMelt: 0.5,
    uPull: 1.1,
    uScroll: scroll,
  };
}

function hexToRgb(hex: string): number[] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

const VERT =
  "#version 300 es\nvoid main(){vec2 p=vec2(gl_VertexID<<1&2,gl_VertexID&2);gl_Position=vec4(p*2.-1.,0.,1.);}";

const FRAG = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uPress;
uniform vec3 uGround;
uniform vec3 uGlow;
uniform vec3 uGlow2;
uniform vec3 uBody;
uniform float uMelt;
uniform float uPull;
uniform float uScroll;

float smin(float a, float b, float k) { float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0); return mix(b, a, h) - k * h * (1.0 - h); }
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

float map(vec3 p) {
  float t = uTime * 0.45;
  float asp = uResolution.x / uResolution.y;
  vec3 home = vec3(clamp((asp - 1.0) * 1.6, 0.0, 1.35), -0.9 * (1.0 - clamp(asp, 0.0, 1.0)), 0.0);
  vec3 cur = vec3((uMouse.x - 0.5) * asp * 2.6, (uMouse.y - 0.5) * 2.6, 0.6);
  vec3 mp = mix(home, cur, 0.6 * uPull);
  float d = length(p - mp) - (0.3 + 0.14 * uPress);
  p -= home;
  p.xz *= rot(t * 0.35);
  p.xy *= rot(0.2 * sin(t * 0.5));
  for (int i = 0; i < 7; i++) {
    float fi = float(i);
    vec3 c = vec3(sin(t * (0.9 + fi * 0.17) + fi * 1.7), cos(t * (0.8 + fi * 0.13) + fi * 2.3) * 0.8, sin(t * (0.6 + fi * 0.07) + fi) * 0.6);
    c *= 1.0 + uScroll * 1.1;
    float r = 0.3 + 0.07 * sin(fi * 3.1) + 0.05 * sin(t * 3.0 + fi * 1.3);
    d = smin(d, length(p - c) - r, max(uMelt * (1.0 - 0.7 * uScroll), 0.03));
  }
  return d;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  float asp = uResolution.x / uResolution.y;
  vec3 ro = vec3(0.0, 0.0, 4.6 - uScroll * 0.7);
  vec3 rd = normalize(vec3(p, -1.75));
  vec3 shift = mix(uGlow, uGlow2, 0.5 + 0.5 * sin(uTime * 0.6));
  vec2 gc = vec2(clamp((asp - 1.0) * 1.6, 0.0, 1.35) / 2.63, -0.2);
  vec3 light = shift * (0.35 + 0.5 * uScroll) * exp(-length(p - gc) * 2.2);
  vec3 col = uGround + (1.0 - exp(-light * 1.4));
  float tt = 0.0;
  bool hit = false;
  for (int i = 0; i < 64; i++) {
    float d = map(ro + rd * tt);
    if (d < 0.001) { hit = true; break; }
    tt += d;
    if (tt > 10.0) break;
  }
  if (hit) {
    vec3 pos = ro + rd * tt;
    vec2 e = vec2(0.0015, -0.0015);
    vec3 n = normalize(e.xyy * map(pos + e.xyy) + e.yyx * map(pos + e.yyx) + e.yxy * map(pos + e.yxy) + e.xxx * map(pos + e.xxx));
    vec3 key = normalize(vec3(-0.5, 0.7, 0.6));
    vec3 rim = normalize(vec3(0.4, -0.6, -0.7));
    float dif = max(dot(n, key), 0.0);
    float back = pow(max(dot(n, rim), 0.0), 1.5);
    float fre = pow(1.0 - max(dot(n, -rd), 0.0), 2.5);
    vec3 hv = normalize(key - rd);
    float spe = pow(max(dot(n, hv), 0.0), 90.0);
    vec3 r = reflect(rd, n);
    float env = smoothstep(-0.2, 0.9, r.y);
    vec3 rimCol = mix(uGlow, uGlow2, 0.5 + 0.5 * n.y);
    vec3 c = uBody * (0.35 + 0.65 * dif);
    c += mix(rimCol, shift, 0.4) * (back * 1.2 + fre * 1.0) * (1.0 + 0.6 * uScroll);
    c += vec3(1.0, 0.92, 0.85) * (spe * 1.3 + env * 0.12);
    col = 1.0 - exp(-c * 1.4);
  }
  col += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.02;
  float mask = smoothstep(0.0, 0.3, uv.y) * smoothstep(1.0, 0.92, uv.y);
  col = mix(uGround, col, mask);
  outColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

type Uniform = { at: WebGLUniformLocation | null; type: number };

// The design's shader kit, minus its editor hooks. Returns stop() for unmount.
function shaderStage(view: HTMLCanvasElement, frag: string, read: () => Uniforms) {
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
  const paint = view.getContext("2d");
  let buf: HTMLCanvasElement | null = null;
  let gl: WebGL2RenderingContext | null = null;
  let uni: Record<string, Uniform> | null = null;
  let raf = 0;
  let away: ReturnType<typeof setTimeout> | undefined;
  let revive: ReturnType<typeof setTimeout> | undefined;
  let shown = true;
  let broken = !paint;
  let fresh = true;
  let before = "";
  let time = 12;
  let last = 0;
  let down = false;
  let inside = false;
  let press = 0;
  let level = 0;
  let ticks = 0;
  let due = 0;
  let next = 0;
  let wait = 2;
  const sharp = 1.5;
  let aim = [0.5, 0.5];
  let mouse = [0.5, 0.5];

  function fail() {
    broken = true;
    halt();
    sleep();
  }

  function onLost(e: Event) {
    e.preventDefault();
    halt();
    gl = null;
    clearTimeout(revive);
    revive = setTimeout(() => {
      if (shown) run();
    }, 500);
  }

  function part(g: WebGL2RenderingContext, kind: number, code: string) {
    const s = g.createShader(kind);
    if (!s) return null;
    g.shaderSource(s, code);
    g.compileShader(s);
    if (g.getShaderParameter(s, g.COMPILE_STATUS) || g.isContextLost()) return s;
    fail();
    return null;
  }

  function wake(): boolean {
    if (gl && gl.isContextLost()) gl = null;
    if (gl || broken) return !!gl;
    buf = document.createElement("canvas");
    buf.addEventListener("webglcontextlost", onLost);
    const g = buf.getContext("webgl2", { alpha: false, antialias: false });
    if (!g) {
      broken = !uni;
      return false;
    }
    gl = g;
    const v = part(g, g.VERTEX_SHADER, VERT);
    const f = v && part(g, g.FRAGMENT_SHADER, "#version 300 es\nprecision highp float;\nout vec4 outColor;\n#line 1\n" + frag);
    if (!v || !f) return false;
    const prog = g.createProgram();
    if (!prog) return false;
    g.attachShader(prog, v);
    g.attachShader(prog, f);
    g.linkProgram(prog);
    if (!g.getProgramParameter(prog, g.LINK_STATUS) && !g.isContextLost()) {
      fail();
      return false;
    }
    g.useProgram(prog);
    uni = {};
    for (let i = g.getProgramParameter(prog, g.ACTIVE_UNIFORMS) - 1; i >= 0; i--) {
      const a = g.getActiveUniform(prog, i);
      if (a) uni[a.name.replace("[0]", "")] = { at: g.getUniformLocation(prog, a.name), type: a.type };
    }
    fresh = true;
    return true;
  }

  function sleep() {
    if (buf) buf.removeEventListener("webglcontextlost", onLost);
    const x = gl && gl.getExtension("WEBGL_lose_context");
    gl = null;
    if (x) x.loseContext();
  }

  function put(g: WebGL2RenderingContext, name: string, value: Value) {
    const u = uni && uni[name];
    if (!u) return;
    const v = typeof value === "string" ? hexToRgb(value) : value;
    if (u.type === g.FLOAT) g.uniform1f(u.at, v as number);
    else if (u.type === g.INT || u.type === g.BOOL) g.uniform1i(u.at, +(v as number));
    else if (u.type === g.FLOAT_VEC2) g.uniform2fv(u.at, v as number[]);
    else if (u.type === g.FLOAT_VEC3) g.uniform3fv(u.at, v as number[]);
  }

  function draw(now: number) {
    const g = gl;
    if (!g || !buf || !paint) return;
    const dt = Math.min(0.2, (now - last) / 1000);
    const vals = read();
    const still = calm.matches;
    const text = JSON.stringify(vals);
    const rate = typeof vals.speed === "number" ? vals.speed : 1;
    last = now;
    if (!still) time += dt * rate;
    if (!inside && !still) {
      aim = [0.5 + 0.3 * Math.sin(time * 0.37), 0.5 + 0.24 * Math.sin(time * 0.53 + 1.1)];
    }
    const x = mouse[0];
    const y = mouse[1];
    const k = 1 - Math.pow(0.86, dt * 60);
    mouse = [x + (aim[0] - x) * k, y + (aim[1] - y) * k];
    press += ((down ? 1 : 0) - press) * k;
    const cw = view.clientWidth;
    const ch = view.clientHeight;
    if (!cw || !ch) return;
    let s = Math.min(window.devicePixelRatio || 1, 1.5);
    s = Math.pow(0.7, level) * Math.min(s, sharp, Math.sqrt(2.0736e6 / (cw * ch)));
    const w = Math.max(2, Math.round(cw * s));
    const h = Math.max(2, Math.round(ch * s));
    if (view.width !== w || view.height !== h) {
      view.width = w;
      view.height = h;
      fresh = true;
    }
    const moved = Math.abs(mouse[0] - x) + Math.abs(mouse[1] - y) > 0.0005 || (press > 0.01 && press < 0.99);
    if (still && !fresh && !moved && text === before) return;
    before = text;
    fresh = false;
    if (buf.width !== w || buf.height !== h) {
      buf.width = w;
      buf.height = h;
    }
    g.viewport(0, 0, w, h);
    for (const name in vals) put(g, name, vals[name]);
    put(g, "uTime", time);
    put(g, "uResolution", [w, h]);
    put(g, "uMouse", mouse);
    put(g, "uPress", press);
    g.drawArrays(g.TRIANGLES, 0, 3);
    paint.drawImage(buf, 0, 0);
  }

  function frame(now: number) {
    try {
      draw(now);
    } catch {
      fail();
    }
  }

  function count(now: number) {
    ticks = 0;
    due = now + 2e3;
  }

  // Adaptive quality: under ~25 fps for 2 s the resolution drops a level (x0.7, up to 5 levels);
  // it climbs back one level at a time, waiting longer after each recovery.
  function tune(now: number) {
    if (ticks < 50 && !calm.matches) {
      level += level < 5 ? 1 : 0;
      next = now + wait * 1e3;
    } else if (level && now > next) {
      level--;
      wait = Math.min(wait * 2, 64);
      next = now + wait * 1e3;
    }
    count(now);
  }

  function tick(now: number) {
    raf = gl && !gl.isContextLost() ? requestAnimationFrame(tick) : 0;
    if (!raf) return;
    ticks++;
    if (now > due) tune(now);
    if (now - last > (inside ? 12 : Math.max(30, level * level * 4))) frame(now);
  }

  function run() {
    clearTimeout(away);
    if (!raf && wake()) {
      count((last = performance.now()));
      raf = requestAnimationFrame(tick);
    }
  }

  function halt() {
    cancelAnimationFrame(raf);
    raf = 0;
  }

  function point(e: PointerEvent) {
    aim = [e.offsetX / (view.clientWidth || 1), 1 - e.offsetY / (view.clientHeight || 1)];
    inside = true;
    run();
  }

  const on: Record<string, (e: PointerEvent) => void> = {
    pointermove: (e) => point(e),
    pointerdown: (e) => {
      point(e);
      down = true;
    },
    pointerup: () => {
      down = false;
    },
    pointerleave: () => {
      inside = false;
      down = false;
    },
  };

  const seen = new IntersectionObserver((entries) => {
    clearTimeout(away);
    shown = entries[entries.length - 1].isIntersecting;
    if (shown) run();
    else {
      halt();
      away = setTimeout(sleep, 1500);
    }
  });

  const sized = new ResizeObserver(() => {
    fresh = true;
    if (shown) run();
  });

  const onVisibility = () => count(performance.now());

  for (const ev in on) view.addEventListener(ev, on[ev] as EventListener);
  seen.observe(view);
  sized.observe(view);
  document.addEventListener("visibilitychange", onVisibility);
  if (wake()) frame((last = performance.now()));

  return {
    stop() {
      halt();
      clearTimeout(away);
      clearTimeout(revive);
      for (const ev in on) view.removeEventListener(ev, on[ev] as EventListener);
      seen.disconnect();
      sized.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      sleep();
    },
  };
}

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

export function LiquidHero({ label }: { label: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const view = ref.current;
    if (!view) return;
    let stage: { stop(): void } | null = null;
    const start = () => {
      stage = shaderStage(view, FRAG, uniforms);
    };
    // After hydration and off the critical path: the shader never competes with the headline (LCP).
    const w = window as IdleWindow;
    let idle = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (w.requestIdleCallback) idle = w.requestIdleCallback(start, { timeout: 1200 });
    else timer = setTimeout(start, 200);
    return () => {
      if (idle && w.cancelIdleCallback) w.cancelIdleCallback(idle);
      clearTimeout(timer);
      if (stage) stage.stop();
    };
  }, []);

  return <canvas ref={ref} className="hero__gl" role="img" aria-label={label} />;
}
