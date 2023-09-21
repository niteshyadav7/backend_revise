import mongoose from "mongoose";

const Connection =async function (url) {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/contact_list');
    console.log("database connected👋");
  } catch (error) {
    console.log(error);
  }
};
export default Connection;
