FROM node:latest

COPY . /app

WORKDIR /app

RUN ["corepack", "enable"]

RUN ["pnpm", "i"]

RUN ["pnpm", "run", "build"]

LABEL org.opencontainers.image.source https://github.com/datalinkhq/echo

ENTRYPOINT [ "pnpm", "start:prod" ]