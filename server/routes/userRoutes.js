import { Router } from "express";
import {
  getUser,
  postUser,
  getUserOne,
  updateUser,
  deleteUser,
} from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.post("/user", postUser);
userRouter.get("/user", getUser);
userRouter.get("/user/:id", getUserOne);
userRouter.patch("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);

export default userRouter;
