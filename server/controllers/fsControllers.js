import fs from "fs";

const jsonData = JSON.parse(fs.readFileSync("./data/test.json"));

export const postData = async (req, res) => {
  try {
    const newPerson = await Object.assign({ id: new Date() }, req.body);
    jsonData.push(newPerson);
    fs.writeFileSync("./data/test.json", JSON.stringify(jsonData));
    res.send("Done");
  } catch (err) {
    res.status(404).json({
      result: {
        err,
      },
    });
  }
};

export const getData = async (req, res) => {
  try {
    res.status(201).json({
      data: jsonData,
    });
  } catch (err) {
    res.status(404).json({
      result: {
        err,
      },
    });
  }
};

export const getByOne = async (req, res) => {
  try {
    const id = req.params.id;
    const findData = jsonData.find((el) => el.id === id);
    res.status(200).json({
      data: {
        findData,
      },
    });
  } catch (err) {
    res.status(404).json({
      result: {
        err,
      },
    });
  }
};
