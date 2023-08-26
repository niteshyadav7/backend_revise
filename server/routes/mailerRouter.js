import express from "express";
import nodemailer from "nodemailer";

const nodemailerRouter = express.Router();
nodemailerRouter.post("/register", (req, res) => {
  const { email, name, contact, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nitesh0709yadav@gmail.com",
      pass: "evmumkkwhikqerbm",
    },
  });
  const mailOptions = {
    from: "nitesh0709yadav@gmail.com",
    to: email,
    subject: "Sending Email",
    text:
      "Name :" + name + "\n\nMessage :" + message + "\n\nContact :" + contact,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info.response);
      res.status(201).json({
        result: {
          info,
        },
      });
    }
  });
});
export default nodemailerRouter;
