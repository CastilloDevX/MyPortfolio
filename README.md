# My Portfolio

Portafolio personal construido con React, Vite y Tailwind CSS.

## Scripts

- `npm run dev`: inicia el entorno de desarrollo.
- `npm run build`: genera la version de produccion.
- `npm run lint`: revisa el codigo con ESLint.
- `npm run preview`: sirve el build localmente.

## Estructura

La base del proyecto se reorganizo para que cada capa tenga una responsabilidad clara:

```text
src/
  app/          # composicion principal de la aplicacion
  components/   # piezas reutilizables (cards, layout, motion, ui)
  data/         # contenido centralizado del portafolio
  hooks/        # hooks reutilizables
  sections/     # secciones completas de la landing
  styles/       # estilos globales, fuentes y animaciones
```

## Animaciones

Se agrego un sistema sencillo de reveal on scroll con `IntersectionObserver`.

- Los textos principales aparecen al entrar en viewport.
- Los carouseles tambien se activan al hacer scroll.
- Se respeta `prefers-reduced-motion` para accesibilidad.

## Formulario de contacto (Resend)

Contacto envía a `POST /api/contact`. La misma función funciona en Vite local y
como Vercel Function en producción. Usa la API HTTP de Resend sin añadir un SDK.
La interfaz incorpora Hugeicons y AnimatedContent de React Bits.

### Configuración local

El archivo privado `.env` ya está preparado y excluido de Git. Completa:

```dotenv
RESEND_API_KEY=tu_clave_de_resend
CONTACT_FROM_EMAIL=Portafolio <onboarding@resend.dev>
CONTACT_TO_EMAIL=castilloquehjosema@gmail.com
```

No uses prefijos `VITE_` para estas variables. Reinicia `npm run dev` después de
editar `.env`. `.env.example` contiene únicamente la plantilla pública.

`onboarding@resend.dev` es el remitente de prueba: solo puede enviar al correo
de la cuenta propietaria de Resend. Para otro destinatario o para usar tu propia
identidad, verifica un dominio en Resend y configura `CONTACT_FROM_EMAIL` con una
dirección de ese dominio. El correo del visitante se utiliza como `reply_to`,
no como remitente. No se envían respuestas automáticas al visitante.

### Vercel

Añade `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` y `CONTACT_TO_EMAIL` en las variables
de entorno del proyecto (Production y los entornos Preview que quieras usar) y
redespliega. Subir `.env` a Git no configura Vercel. El hosting debe ejecutar
`api/contact.js`; `npm run preview` solo sirve el frontend compilado.

Se acepta el origen del propio sitio. Para una integración entre dominios,
`CONTACT_ALLOWED_ORIGINS` admite una lista explícita separada por comas. El
endpoint valida campos, limita el tamaño del cuerpo, incluye un campo señuelo
y usa claves de idempotencia al reintentar. Configura los límites de tráfico de
`/api/contact` con Vercel Firewall para controlar el abuso en producción.

### Validación

- `npm run test:contact`: contratos del endpoint, validación, fallos de proveedor
  y límites; usa un proveedor simulado y no envía correos reales.
- `npm run lint`
- `npm run build`

El formulario solo muestra éxito cuando Resend acepta el mensaje y devuelve
un identificador. La aceptación no confirma la entrega final en la bandeja.
Errores de envío conservan los datos; hay un enlace `mailto:` como alternativa.

Referencias: [API de Resend](https://resend.com/docs/api-reference/emails/send-email)
y [restricciones del remitente de prueba](https://resend.com/docs/knowledge-base/403-error-resend-dev-domain).
