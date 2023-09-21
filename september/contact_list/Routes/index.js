import express from "express";
import { routerAuth } from "./authRoutes.js";

export const mainRouter = express.Router();

mainRouter.use("/", routerAuth);
