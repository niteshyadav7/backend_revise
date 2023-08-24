import express, { json } from "express";
import dotenv from "dotenv"; //this line make the .env file enables
import cors from "cors";
import fs from "fs";
import morgan from "morgan";

dotenv.config(); // configuring the dotenv

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOST_NAME;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello" });
});

const jsonData = JSON.parse(fs.readFileSync("./data/data.json"));
app.post("/api/person", (req, res) => {
  try {
    const newPerson = Object.assign({ id: new Date() }, req.body);
    jsonData.push(newPerson);
    fs.writeFileSync("./data/data.json", JSON.stringify(jsonData));
    res.send("DONE!");
    // res.status(200).json({
    //   data: {
    //     jsonData,
    //   },
    // });
  } catch (err) {
    res.status(404).json({
      data: err,
    });
  }
});
app.get("/api/person", (req, res) => {
  try {
    res.status(200).json({
      data: {
        jsonData,
      },
    });
  } catch (err) {
    res.status(404).json({
      data: err,
    });
  }
});
app.get("/api/person/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const person = jsonData.find((el) => el.id === id);
  res.status(200).json({
    data: {
      person,
    },
  });
});

app.listen(PORT, () => {
  try {
    console.log(`server running on ${HOSTNAME}:${PORT}...`);
  } catch (err) {
    console.log(err);
  }
});
