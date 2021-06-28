import express, { Request, Response } from "express";
import { Post } from "../entity/Post";
import { User } from "../entity/User";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { title, body, userUuid } = req.body;
  try {
    const user = User.findOneOrFail({ uuid: userUuid });

    const post = new Post({ title, body });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default router;
