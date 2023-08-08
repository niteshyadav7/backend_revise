import mongoose from "mongoose";

const Connection = async (url) => {
  try {
    await mongoose.connect(`${url}`);
    console.log(`database connected!`);
  } catch (err) {
    console.log(`Error occurs during database connection setup ${err}`);
  }
};
export default Connection;
