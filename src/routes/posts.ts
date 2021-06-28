import express, { Request, Response } from "express";
import { Post } from "../entity/Post";
import { User } from "../entity/User";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { title, body, userUuid } = req.body;
  try {
    const user = await User.findOneOrFail({ uuid: userUuid });

    const post = new Post({ title, body, user });
    await post.save();

    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({ relations: ["user"] });
    return res.json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default router;
