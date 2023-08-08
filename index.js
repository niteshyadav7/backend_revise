import express from "express";

const port = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, NITESH YADAV!");
});

app.listen(port, () => {
  console.log(`server running on ${port}...`);
});
