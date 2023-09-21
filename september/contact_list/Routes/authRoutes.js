import express from "express";
import { Login, Signup } from "../Controllers/AuthControllers.js";
import { userVerification } from "../Middleware/AuthMiddleware.js";

export const routerAuth = express.Router();

routerAuth.post("/signup", Signup);
routerAuth.post("/login", Login);
routerAuth.post("/", userVerification);
