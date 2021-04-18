# pern-stack

Following [FreeCodeCamp's PERN Stack Course - Postgres, Express, React, and Node](https://www.youtube.com/watch?v=ldYcgPKEZC8&ab_channel=freeCodeCamp.org)

## Server

- `cd server/`
- `yarn`
- `yarn run start`

## Database

### Environment variables

Create a .env file in `/server` with the following environment variables:

DB_HOST
DB_NAME
DB_PASSWORD
DB_PORT
DB_USER

### Querying

#### psql

- `brew services start postgresql`
- `psql postgres`

To see the databases:

- `\l`

To exit the databases:

- ctrl + c

To move into a particular database:

- `\c perntodo`

To see the available tables:

- `\dt`

#### pgcli

Package manager used to work with Postgres databases. [Available commands](https://www.pgcli.com/commands).

To show the database:

- `pgcli -d perntodo`

To show the tables:

- `\d`

## Client

- `cd client`
- `yarn && yarn dev`
