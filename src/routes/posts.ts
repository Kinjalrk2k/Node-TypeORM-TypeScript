import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { title, body, userUuid } = req.body;
  try {
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: error.message.replace(/(\r\n|\n|\r)/gm, "") });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: error.message.replace(/(\r\n|\n|\r)/gm, "") });
  }
});

export default router;
