# GVM API

## Utilizando la API

Para poder utlizar la API se necesitan las siguientes herramientas:

- [Bun](https://bun.sh/docs/installation)

Y las siguientes variables de entorno:

```
JWT_SECRET=
DATABASE_URL=
MAILERSEND_API_KEY=
ENVIRONMENT=
PORT=
```

Para empezar la aplicacion se utiliza el siguiente comando `bun server`.

## Deployeando la API

Para deployear la API se requieren los siguientes servicios:

- El servidor de la API
- Una base de datos PostgreSQL
- Cuenta de Mailersend

Actualmente el proyecto se encuentra en [Render](https://render.com/) y la base de datos en [neon.tech](https://neon.tech/home)
