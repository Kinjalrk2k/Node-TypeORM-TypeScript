import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection()
  .then(async (connection) => {
    const user = new User();
    user.name = "John Doe";
    user.email = "john@gmail.com";
    user.role = "admin";

    await user.save();

    console.log("User created!");
  })
  .catch((error) => console.log(error));
