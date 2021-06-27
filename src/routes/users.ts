import express, { Request, Response } from "express";
import { User } from "../entity/User";

const router = express.Router();

// Create an user
router.post("/", async (req: Request, res: Response) => {
  const { name, email, role } = req.body;

  try {
    const user = User.create({ name, email, role });
    await user.save();

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// Read an user
router.get("/:uuid", async (req: Request, res: Response) => {
  const { uuid } = req.params;
  try {
  } catch (error) {
    console.log(error);
    return res.status(404).json({ err: error.message });
  }
});

// Find all users
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: "Something went wrong" });
  }
});

// Update an user
router.put("/:uuid", async (req: Request, res: Response) => {
  const { name, email, role } = req.body;
  const { uuid } = req.params;

  try {
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ msg: error.message.replace(/(\r\n|\n|\r)/gm, "") });
  }
});

// Delete an user
router.delete("/:uuid", async (req: Request, res: Response) => {
  const { uuid } = req.params;

  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: "Something went wrong" });
  }
});

export default router;
