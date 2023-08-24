import { Router } from "express";
import router from "./fsRouter.js";
import userRouter from "./userRoutes.js";

const mainRouter = Router();

mainRouter.use("/fs", router);
mainRouter.use("/db", userRouter);

export default mainRouter;
