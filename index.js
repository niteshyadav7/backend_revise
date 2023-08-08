const express = require("express");
const fs = require("fs");
const port = 8000;

const app = express();

app.use(express.json());

const tours = JSON.parse(fs.readFileSync("./data/tours-simple.json"));

app.get("/api/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours: tours,
    },
  });
});

app.post("/api/tours", (req, res) => {
  console.log(req.body);
  const newTours = Object.assign({ id: new Date() }, req.body);
  tours.push(newTours);
  fs.writeFileSync("./data/tours-simple.json", JSON.stringify(tours), (err) => {
    res.status(200).json({
      status: "success",
      data: {
        tours: newTours,
      },
    });
  });
  res.send("Done!");
});

app.get("/api/tours/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const findTours = tours.find((el) => el.id === id);
  res.status(200).json({
    data: {
      tours: findTours,
    },
  });
  // res.send("Done")
});
app.listen(port, () => {
  console.log(`server running on ${port}...`);
});
