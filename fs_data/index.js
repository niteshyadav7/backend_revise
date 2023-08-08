import express from "express";
import fs from "fs";

const port = 8000;
const app = express();
app.use(express.json());

const data = JSON.parse(fs.readFileSync("./data/tours-simple.json"));

// ⛔THIS IS FOR THE POSTING⛔::

app.post("/api/person", (req, res) => {
  try {
    const newPerson = Object.assign({ id: new Date() }, req.body);
    data.push(newPerson);
    fs.writeFileSync("./data/tours-simple.json", JSON.stringify(data));
    res.send("DONE!");
    // res.status(201).json({
    //   data: {
    //     data,
    //   },
    // });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      data: {
        err,
      },
    });
  }
});

// ⛔THIS IS FOR GET ALL DATA::⛔

app.get("/api/person", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      data: {
        err,
      },
    });
  }
});

// ⛔THIS IS FOR GET DATA BY ID⛔

app.get("/api/person/:id", (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);
    const findPerson = data.find((el) => el.id === id);
    res.status(200).json({
      status: "success",
      data: {
        data: findPerson,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      data: {
        err,
      },
    });
  }
});


try {
  app.listen(port, () => {
    console.log("server running on " + port + "");
  });
} catch (err) {
  console.log(err);
}
