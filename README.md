# Application - DaaS

Desktop-as-a-Service ohne Grenzen

## Requirements

* NodeJS with version 18.6.0

## Prerequiste

* NodeJS
* Yarn

## Enrivonment setup

* File for all [Environments](https://github.com/nuromedia/design-daas-application-frontend/blob/main/src/constants/constants.js) to change everything

## User management - setup changes

* App.js [File](https://github.com/nuromedia/design-daas-application-frontend/blob/main/src/App.js)
  * Line 79
    * Replace 'test-client' with 'xxx'
      * xxx is a placeholder for the correct value of the client_id
* login.js [File](https://github.com/nuromedia/design-daas-application-frontend/blob/main/src/views/login.js)
  * Line 83
    * Replace 'test-client' with 'xxx'
      * xxx is a placeholder for the correct value of the client_id
  * Line 196 and 227 and 258
    * Replace 'client_id=test-client' with 'client_id=xxx'
      * xxx is a placeholder for the correct value of the client_id

## Application settings - Local

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
