import express from "express";
import User from "../models/userSchema.js";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send("Data Added!");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: "success",
      result: user.length,
      data: [
        {
          user,
        },
      ],
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};

export const getUser = async (req, res) => {
  try {
    // const id = req.params.id;
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: [
        {
          user,
        },
      ],
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.send("Update is Done!");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send("Delete Done!");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};

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
