import Auth from "../models/authModel.js";
import jwt from "jsonwebtoken";

const secret_key = "mera naam hai jaggu karta hu sabko haggu. ";

const userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, secret_key, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await Auth.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};

export default userVerification;
