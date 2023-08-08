import express from "express";

import Connection from "./config/db.js";
import User from "./models/userSchema.js";
const port = 8080;

const app = express();
app.use(express.json());

// create
app.post("/api/person", async(req, res) => {
  try {
    const user =await User.create(req.body);
    res.send("Data Added!");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
});

// getAllData

app.get("/api/person", async(req, res) => {
  try {
    const user =await User.find();
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
});

// findById



// database
Connection("mongodb://127.0.0.1:27017/test");

try {
  app.listen(port, () => {
    console.log(`app server running on ${port}...`);
  });
} catch (err) {
  console.log(err);
}
