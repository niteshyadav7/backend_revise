import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
// LOCAL import should be in fullName:⛔MUST BE fullName with extension
/**
 * NOTE:1. MUST BE THE LOCAL IMPORT WITH THE EXTENSION
 *  2. ANY WHERE.
 */

import ConnectionDatabase from "./config/db.js";

import nodemailerRouter from "./routes/mailerRouter.js";
import mainRouter from "./routes/mainRouter.js";

dotenv.config();

const PORT = process.env.PORT;
const HOST_NAME = process.env.HOST_NAME;
const DB = process.env.MONGO;

// console.log(DB);

const app = express();
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api", mainRouter);

app.listen(PORT, () => {
  try {
    console.log(`server running on ${HOST_NAME}:${PORT} `);
  } catch (err) {
    console.log(err);
  }
});

ConnectionDatabase(DB);
