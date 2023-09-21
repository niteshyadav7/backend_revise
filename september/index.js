// import packages

import express from "express";
import dotenv from "dotenv";

const app = express();

// configure the dotenv => to access the .env file.
dotenv.config();
const PORT = process.env.PORT;
const HOST_NAME = process.env.HOST_NAME;


app.listen(PORT, () => {
  console.log(`server running on ${HOST_NAME}:${PORT}`);
});
