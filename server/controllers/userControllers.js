import User from "../models/userModel.js";
import express from "express";

export const postUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      result: "Data Added!",
    });
  } catch (err) {
    res.status(404).json({
      result: err,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: "success",
      result: user.length,
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      result: err,
    });
  }
};

export const getUserOne = async (req, res) => {
  try {
    const params = req.params.id;
    const user = await User.findById(params);
    res.status(200).json({
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      result: err,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const params = req.params.id;
    const user = await User.findByIdAndUpdate(params);
    res.status(202).json({
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      result: err,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const params = req.params.id;
    const user = await User.findByIdAndDelete(params);
    res.status(202).json({
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      result: err,
    });
  }
};
