import express from "express";
import dotenv from "dotenv"; //this line make the .env file enables

dotenv.config(); // configuring the dotenv
const PORT = process.env.PORT;
const HOSTNAME=process.env.HOST_NAME;

const app = express();

try {
  app.listen(PORT, () => {
    console.log(`server running on ${HOSTNAME}:${PORT}...`);
  });
} catch (err) {
  console.log(err);
}
