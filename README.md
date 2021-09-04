<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

NestJs Mikro-Orm Project - simple CRUD

## Installation
Install dependencies
    
    yarn
## Database

The example codebase uses [MikroORM](https://mikro-orm.io/) with a Sqlite database.

 Adjust the connection settings in MikroORM config file.

    src/mikro-orm.config.ts
    
Create database schema:

    npx mikro-orm schema:create --run

Now you can start the application with `yarn start`

## Start application

- `yarn start`
- Test api by browsing to `http://localhost:3000/api/user`
- View automatically generated swagger api docs by browsing to `http://localhost:3000/`