# WeSleep Contact Backend

Este proyecto es la parte del backend para recibir los formularios de contacto de la web y enviar los mensajes a bernat@wesleep.pro.

## Instalación

1. Asegúrate de estar en la carpeta del proyecto:
   ```bash
   cd c:\Users\Bernat\Desktop\WeSleep\07_WEB\Actual\WS-API-WEB
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` en la misma carpeta con tus credenciales SMTP:
   ```env
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=tu-smtp-usuario
   SMTP_PASS=tu-smtp-password
   PRIVATE_DOCUMENTS_DIR=../private-documents
   BLOB_READ_WRITE_TOKEN=token-privado-de-vercel-blob
   ```

   En local, los PDFs de captación se guardan en la carpeta privada indicada por `PRIVATE_DOCUMENTS_DIR`, fuera de `WS-API-WEB` y de cualquier raíz pública. En desarrollo, el valor por defecto es `../private-documents`. No los coloques en `public/`.

## Ejecución

Ejecuta el servidor:

```bash
npm start
```

Abre la web desde `http://localhost:3000` y envía el formulario de contacto.

## Cómo funciona

- La web envía el formulario a `POST /api/contact`
- El backend usa `nodemailer` para enviar el correo a `bernat@wesleep.pro`
- El navegador registra el lead en Web3Forms y, si la respuesta es correcta, solicita el PDF mediante `POST /api/lead-download` con email, sector e idioma. El servidor transmite el archivo privado solo para una petición válida.
- Las URL directas a PDFs ya no se exponen desde la carpeta pública. El email se solicita antes de la entrega, pero no se verifica que pertenezca a la persona; para eso haría falta confirmación por email.

## Despliegue en Vercel

1. En el proyecto de Vercel, abre **Storage**, crea un store **Blob** con acceso **Private** y conéctalo al proyecto. Vercel configura la autenticación OIDC para la función.
2. Añade `PRIVATE_DOCUMENTS_DIR` solo si usas una ubicación no predeterminada en local. En producción, el endpoint lee los documentos desde Blob privado.
3. Para cargar documentos desde este equipo, crea un token de Blob con permisos de lectura y escritura y guárdalo únicamente en `.env` como `BLOB_READ_WRITE_TOKEN`. No lo publiques ni lo subas al repositorio.
4. Coloca los PDFs disponibles en `../private-documents` usando los nombres definidos en `server.js` y ejecuta `npm run upload:private-pdfs`. El script sube únicamente a `documents/` en el store privado.
5. Despliega el proyecto en Vercel. La web está en `public/` y Vercel la sirve directamente. El `buildCommand` (`npm run build`) solo comprueba que no haya PDFs en `public/`.

El store privado necesita estar conectado al mismo proyecto de Vercel donde corre Express. Vercel sirve los archivos de `public/` desde su CDN y ejecuta Express como una Function para `/api/*`. Toda la web (HTML, CSS, JS, imágenes) debe estar dentro de `public/`.

## Dependencias principales

- Express
- Nodemailer
- Cors
- Dotenv
