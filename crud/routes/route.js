import express from "express";
import { createUser } from "../controllers.js";

const userRouter = express.Router();

// CREATE USER
userRouter.post("/api/person", createUser);
// GET ALL
userRouter.get("/api/person", getAllUser);
// GET BY ID
userRouter.get("/api/person/:id", getUser);
// UPDATE
userRouter.patch("/api/person/:id", updateUser);
// DELETE
userRouter.delete("/api/person/:id", deleteUser);

export default userRouter;
