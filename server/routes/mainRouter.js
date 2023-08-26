import { Router } from "express";
import router from "./fsRouter.js";
import userRouter from "./userRoutes.js";
import authRouter from "./authRouter.js";
import nodemailerRouter from "./mailerRouter.js";

const mainRouter = Router();

mainRouter.use("/fs", router);
mainRouter.use("/db", userRouter);
mainRouter.use("/auth", authRouter);
mainRouter.use("/mailer", nodemailerRouter);

export default mainRouter;
