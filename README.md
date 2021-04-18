# pern-stack

Following [FreeCodeCamp's PERN Stack Course - Postgres, Express, React, and Node](https://www.youtube.com/watch?v=ldYcgPKEZC8&ab_channel=freeCodeCamp.org)

## Server

- `cd server/`
- `yarn`
- `yarn run start`

## Database

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

### PGCLI

Package manager used to work with Postgres databases. [Available commands](https://www.pgcli.com/commands).

To show the database:
- `pgcli -d perntodo`

To show the tables:
- `\d`

