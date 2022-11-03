FROM node:latest

WORKDIR /app

RUN ["corepack", "enable"]

RUN pnpm

RUN ["pnpm", "i"]

RUN ["pnpm", "build", "&&", "pnpm", "generate"]

ENTRYPOINT [ "pnpm", "start" ]