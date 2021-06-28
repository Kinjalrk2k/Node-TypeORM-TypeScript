# Node TypeORM TypeScript

- Learning TypeORM with PostgreSQL in NodeJS backend
- Tutorial by: Ahmed Hadjou (Classsed)
  - [TypeORM Tutorial (Seamless Typescript ORM)](https://www.youtube.com/watch?v=Paz0gnODPE0)

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
  > Read the [docs](https://typeorm.io/#/using-cli)

## Listeners

- Hooks in TypeORM
  > Any of your entities can have methods with custom logic that listen to specific entity events. You must mark those methods with special decorators depending on what event you want to listen to.

```ts
@BeforeInsert()
  createUuid() {
    this.uuid = uuid();
  }
```

- We can also override some of the default class methods. The following code removes the `id` field from all the responses from database

```ts
toJSON() {
  return { ...this, id: undefined };
}
```

## Abstract Models

- Different models might have some common fields/functionalities. We can refractor them by using an abstract class and then extending the same to our models

```ts
export default abstract class Model extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  .
  .
  .
}
```

## Constructor syntax in Models

- We can provide our own constructor in the models and use the constructor syntax to create a record

```ts
// inside the model class
constructor({ title, body }: { title: string; body: string }) {
  super();
  Object.assign(this, { title, body });
}

// creating a new record
const post = new Post({ title, body });

```

## Enums

- Unlike prisma, we can define `enum` directly in a column decorator

```ts
@Column({
  type: "enum",
  enum: ["user", "admin", "superadmin"],
  default: "user",
})
```

## Relations

> Read the [docs](https://typeorm.io/#/relations)

- Establishing a many-to-one relationship and inverse one-to-many relationship (or vice versa)

```ts
// in POSTS -  many posts can belong to one user
@ManyToOne(() => User)
user: User;

// in USERS - one user can have many posts
@OneToMany(() => Post, (post) => post.user /*the inverse function*/)
posts: Post[]; // returning a list of posts
```

## Migrations

- We shouldn't be using `sync` in production, as it's **"DANGEROUS"**. Set it to `false`!
- To generate a migration: (this just creates the migration file, doesn't run it itself)

```bash
npm run typeorm migration:generate -- -n <name>
```

> Note: `--` is used to forward arguments to a script

- To run the migration:

```bash
npm run typeorm migration:run
```

- If we re-run the migration, it wont run actually. This is because it keeps track of the already run migrations. It only runs the pending migrations
- To revert a migration (`down` it):

```bash
npm run typeorm migration:revert
```

- To view the status of migrations:

```bash
npm run typeorm migration:show

[ ] createSchema1624865222248 // pending migration
[X] createSchema1624865222248 // completed migration
```
