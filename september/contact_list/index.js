/** contact list main page */
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// local imports
import { mainRouter } from "./Routes/index.js";
import Connection from "./Config/db.js";

const app = express();
dotenv.config();
const { PORT, HOST_NAME, MD_URL } = process.env;

app.use(cookieParser());
app.use(express.json());

// router access
app.use(mainRouter);

// server listen
app.listen(PORT || 8000, () => {
  console.log(`server running on ${HOST_NAME}:${PORT}....`);
});

// database connection function calls
Connection(MD_URL);
