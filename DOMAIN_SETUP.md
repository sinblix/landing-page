# Configuración de Dominio sinblix.lat en Vercel

## Pasos para conectar sinblix.lat con Vercel

### 1. Agregar dominio en Vercel Dashboard

1. Ve a: https://vercel.com/dashboard
2. Selecciona el proyecto: **sinblix-landing**
3. Ve a: **Settings** → **Domains**
4. Haz clic en: **"Add Domain"**
5. Ingresa:
   - `sinblix.lat` (dominio raíz)
   - `www.sinblix.lat` (subdominio www)

### 2. Configurar DNS en AWS Route 53

Después de agregar el dominio en Vercel, verás instrucciones específicas de DNS. 

#### Para el dominio raíz (sinblix.lat):

**Opción A: Usar ALIAS Record (Recomendado en Route 53)**
- Tipo: **A** (con Alias activado)
- Nombre: `sinblix.lat` (o dejar vacío)
- Alias: **Sí**
- Tipo de alias: **Alias to another Route 53 record** o **Alias to CloudFront distribution**
- Valor: El dominio que Vercel proporcione (ej: `cname.vercel-dns.com` o IPs específicas)

**Opción B: Si Vercel proporciona IPs**
- Tipo: **A**
- Nombre: `sinblix.lat`
- Valor: Las IPs que Vercel indique (normalmente 4 IPs IPv4)

#### Para www.sinblix.lat:

- Tipo: **CNAME**
- Nombre: `www`
- Valor: El dominio que Vercel proporcione (ej: `cname.vercel-dns.com`)

### 3. Actualizar registros en Route 53

1. Ve a AWS Console → Route 53 → Hosted Zones → sinblix.lat
2. **Edita el registro A existente** de `sinblix.lat`:
   - Cambia el valor de `d1ln82q6kcu7a7.cloudfront.net` al valor que Vercel proporcione
   - O crea un nuevo registro A con las IPs de Vercel
3. **Crea/edita el registro CNAME** para `www.sinblix.lat`:
   - Apunta al dominio de Vercel

### 4. Verificar configuración

- Espera 5-60 minutos para propagación DNS
- Verifica con: `dig sinblix.lat` o herramientas online como https://dnschecker.org
- Vercel mostrará el estado de verificación en el Dashboard

### 5. Configurar variable de entorno

Una vez que el dominio esté funcionando:

1. Ve a Vercel Dashboard → Settings → Environment Variables
2. Actualiza `NEXT_PUBLIC_SITE_URL` a: `https://sinblix.lat`
3. Aplica a todos los ambientes (Production, Preview, Development)

## Notas importantes

- Vercel puede tardar hasta 24 horas en verificar el dominio
- Los cambios DNS pueden tardar hasta 48 horas en propagarse completamente
- Asegúrate de que el dominio esté verificado en Vercel antes de actualizar los registros DNS
- Si tienes problemas, verifica que los registros DNS sean exactamente como Vercel los indica
