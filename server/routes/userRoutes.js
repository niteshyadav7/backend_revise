import { Router } from "express";
import { getUser, postUser } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.post("/user", postUser);
userRouter.get("/user", getUser);
export default userRouter;
