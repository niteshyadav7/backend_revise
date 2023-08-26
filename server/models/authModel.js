import mongoose from "mongoose";
import bcrypt from "bcrypt";

const authSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "must have the email"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "must have the username"],
  },
  password: {
    type: String,
    required: [true, "must have the password"],
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
});

authSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});
const Auth = mongoose.model("Auth", authSchema);
export default Auth;
