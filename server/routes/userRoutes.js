import { Router } from "express";
import {
  getUser,
  postUser,
  getUserOne,
} from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.post("/user", postUser);
userRouter.get("/user", getUser);
userRouter.get("/user/:id", getUserOne);
export default userRouter;
