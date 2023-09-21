import jwt from "jsonwebtoken";
import User from "../Models/UserSchema.js";

export const userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(
    token,
    "haar haar mahadev , jai sri ram ,hare krishna hare ram ",
    async (err, data) => {
      if (err) {
        return res.json({ status: false });
      } else {
        const user = await User.findById(data.id);
        if (user) return res.json({ status: true, user: user.username });
        else return res.json({ status: false });
      }
    }
  );
};
