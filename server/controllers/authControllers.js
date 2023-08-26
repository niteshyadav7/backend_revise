import Auth from "../models/authModel.js";
import bcrypt from "bcrypt";
import { createSecretToken } from "../utils/SecretToken.js";

export const SignUp = async (req, res, nxt) => {
  const { email, password, username, createdAt } = req.body;
  const existingUser = await Auth.findOne({ email });
  if (existingUser) {
    return res.json({
      message: "User Already Exist...",
    });
  }
  const user = await Auth.create({
    email,
    password,
    username,
    createdAt,
  });
  const token = createSecretToken(user._id);
  res.cookie("token", token, {
    withCredentials: true,
    httpOnly: false,
  });
  res
    .status(201)
    .json({ message: "User signed in successfully", success: true, user });
  nxt();
};

export const Login = async (req, res, nxt) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      message: "All fields are required",
    });
  }
  const user = await Auth.findOne({ email });
  if (!user) {
    return res.json({
      message: "Incorrect password or email",
    });
  }
  const auth = await bcrypt.compare(password, user.password);
  if (!auth) {
    return res.json({ message: "Incorrect password or email" });
  }
  const token = createSecretToken(user._id);
  res.cookie("token", token, {
    withCredentials: true,
    httpOnly: false,
  });
  res
    .status(201)
    .json({ message: "User logged in successfully", success: true });
  nxt();
};
