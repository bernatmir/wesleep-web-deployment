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
   ```

## Ejecución

Ejecuta el servidor:

```bash
npm start
```

Abre la web desde `http://localhost:3000` y envía el formulario de contacto.

## Cómo funciona

- La web envía el formulario a `POST /api/contact`
- El backend usa `nodemailer` para enviar el correo a `bernat@wesleep.pro`

## Dependencias principales

- Express
- Nodemailer
- Cors
- Dotenv
