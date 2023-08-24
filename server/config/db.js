import mongoose from "mongoose";

const ConnectionDatabase = (link) => {
  try {
    mongoose.connect(`${link}`);
    console.log("database connected!👋");
  } catch (error) {
    console.log("Error", error);
  }
};

export default ConnectionDatabase;
