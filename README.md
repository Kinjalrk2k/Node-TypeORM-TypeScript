# Node TypeORM TypeScript

## Bootstrapping

- Install typeorm globally: `npm i -g typeorm` (Or we can use `npx` later)
- Initialize the project using: `typeorm init`
- TypeORM creates a configuration file: `ormconfig.js` which we can edit to provide our database credentials
  - The `synchronize` options lets us syncronize the database with our entities without migrations. It is useful in the Development phase
- Install the dependencies with: `npm i`
- Create the database in PostgreSQL through the CLI/pgAdmin
