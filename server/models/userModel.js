import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Must have the Name"],
  },
  email: {
    type: String,
    required: [true, "Must have the Email Id"],
    unique: true,
  },
  mobile: {
    type: Number,
    required: [true, "Must have the Mobile Number"],
    unique: true,
  },
  degree: {
    type: String,
    required: [true, "Must have the degree"],
  },
});

const User = mongoose.model("User", userSchema);
export default User;
