# Node TypeORM TypeScript

## Bootstrapping

- Install typeorm globally: `npm i -g typeorm` (Or we can use `npx` later)
- Initialize the project using: `typeorm init`
- TypeORM creates a configuration file: `ormconfig.js` which we can edit to provide our database credentials
  - The `synchronize` options lets us syncronize the database with our entities without migrations. It is useful in the Development phase
- Install the dependencies with: `npm i`
- Create the database in PostgreSQL through the CLI/pgAdmin
- If using PostgreSQL install `pg`

## Entity

- It is the representation of the database table
- It is an object which helps us interact with the database tables
- We always have an id as `@PrimaryGeneratedColumn()`[`PRIMARY KEY AUTO INCREMENT`] and then we can create other columns as `@Column`
- Note: all `id`s in postgress are `number` not `string`
- For using the `ActiveRecord` implementation, we need to extend the `BaseEntity` clas in our entity defination.

```ts
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  role: string;
}
```

- Table names are generally plurals, we can set this in the `@Entity` decorator: `@Entity({ name: 'users' })` or simply `@Entity("users")`

## TypeORM CLI

- Add this script in _package.json_: `"typeorm": "ts-node ./node_modules/typeorm/cli.js"` to use the TypeORM's CLI

### Commands

- `npm run typeorm schema:drop` - Drops all the tables
- `npm run typeorm schema:sync` - Syncs the tables with the database
