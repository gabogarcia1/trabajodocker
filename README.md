
## trabajo practico integrador
## Descripción
Elijo next JS usando typescript por que es el tipo de tecnologia que estoy utilizando en mi empresa. Estoy trabajando en un proyecto hace mas de un año con next y docker, tambien usa docker compose. Por fin entiendo mas para que sirven 😊.

Use redis, no porque habia algo de documentacion por internet, sino porque es lo que vimos en clase y no se me ocurrio mas. 
el input va cambiando

Uso dockerfile de la documentacion de next
https://nextjs.org/docs/app/getting-started/deploying#templates-1
https://github.com/vercel/next.js/tree/canary/examples/with-docker

## como correr la app en docker 

```bash
docker compose up --build
```

# mas notas:
Esta app esta usando la estructura "app-router based" de next, tiene un BFF (backend for front end ) que es donde puse el redis
basicamente la el enpoint es [localhost:/3000/api/redisfetch](http://localhost:3000/api/redisfetch) lo podes ver si observas el network de la pagina

y redis lo levanta en el puerto 6379, y tuve que cambiarle el host para que no sea localhost porque sino no lo levantaba. entonces lo levanta en redis/6379
de ahi las variables de entorno 

environment:
      - REDIS_HOST=redis
      - REDIS_PORT=6379

![alt text](image.png)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!