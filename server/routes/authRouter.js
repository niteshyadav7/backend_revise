import express from "express";
import { Login, SignUp } from "../controllers/authControllers.js";
import userVerification from "../Middlewares/AuthMiddleware.js";

const authRouter = express.Router();

authRouter.post("/signup", SignUp);
authRouter.post("/login", Login);
authRouter.post("/", userVerification);
export default authRouter;
