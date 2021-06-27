import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";

import { User } from "./entity/User";

import usersRoutes from "./routes/users";
import postsRoutes from "./routes/posts";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

createConnection()
  .then(async () => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running at PORT ${PORT} 🚀`));
  })
  .catch((error) => console.log(error));
