FROM node:latest

COPY . /app

WORKDIR /app

RUN ["corepack", "enable"]

RUN ["pnpm", "i"]

RUN ["pnpm", "run", "build"]

ENTRYPOINT [ "pnpm", "start:prod" ]