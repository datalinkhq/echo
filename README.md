<div align="center"><img src="https://raw.githubusercontent.com/datalinkhq/datalink/main/assets/dark-wideshot.png#gh-dark-mode-only" width="50%" ></div>
<div align="center"><img src="https://raw.githubusercontent.com/datalinkhq/datalink/main/assets/light-wideshot.png#gh-light-mode-only" width="50%" ></div>
<h3 align="center">echo - Our homemade discord bot</h1>
<div align="center">
<a href=""> <img height="40" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@2/assets/compact/social/discord-plural_vector.svg" /> </a>
</div>

## What is this?

This is the bot that datalink's Discord server uses- you can try it out for yourself in our [server](https://discord.gg/wME4WyNGyV)!

## Self Hosting
Feel free to fork and modify echo, or even self-host it! Below are instructions on how to do this:

### Prerequisites:
- [Node.JS](https://nodejs.org)
- [PNPM/NPM/Yarn](https://nodejs.org/api/corepack.html)
- [Docker & Docker Compose (optional)](https://docker.com)

Initially, set up a MySQL Database, preferrably using [PlanetScale](https://planetscale.com). 
Configure the `.env` file accordingly, an example is provided in [`.env.example`](https://github.com/datalinkhq/echo/blob/main/.env.example).

### Docker:
The primary method to host echo is using docker compose.

1. Clone the repository. 
  ```console
  git clone https://github.com/datalinkhq/echo.git
  ```
2. Run the bot using docker-compose. 
  ```console
  docker-compose up -d
  ```
3. To view the logs of the container:
  ```console
  docker compose logs -t -f
  ```

### Locally:
Echo can be hosted without using docker compose as well. 

1. Clone the repository. 
  ```console
  git clone https://github.com/datalinkhq/echo.git
  ```
2. Install dependencies. 
  ```console
  pnpm i
  ```
3. Build the bot and its schema.
  ```console
  pnpm run build && pnpm run generate
  ```
3. Run the bot.
  ```console
  pnpm run start:prod
  ```  
  
