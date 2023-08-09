import express from "express";

import Connection from "./config/db.js";
import userRouter from "./controllers/user.js";
const port = 8080;

const app = express();
app.use(express.json());



// database
Connection("mongodb://127.0.0.1:27017/test");

app.use("/",userRouter)

try {
  app.listen(port, () => {
    console.log(`app server running on ${port}...`);
  });
} catch (err) {
  console.log(err);
}
