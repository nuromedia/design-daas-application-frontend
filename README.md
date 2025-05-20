# Application - DaaS

Desktop-as-a-Service ohne Grenzen

## Requirements

* NodeJS with version 18.6.0

## Prerequiste

* NodeJS
* Yarn

## Application settings

### Start the application

Node

```
npm start
```

or

Yarn

```
yarn start
```

### Build the application

Node

```
npm run build
```

or

Yarn

```
yarn run build
```

### Docker build process

Development - Mode

```sh
docker compose -f docker-compose.dev.yml run
```

Production - Build

```sh
docker compose -f docker-compose.prod.yml build
```

Generate a ".tar" archive for the server deployment

```sh
docker image save -o designapplication.tar design-daas-application-frontend-web
```
