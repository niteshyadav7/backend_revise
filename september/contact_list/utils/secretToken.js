import jwt from "jsonwebtoken";

const createSecretToken = (id) => {
  return jwt.sign(
    { id },
    "haar haar mahadev , jai sri ram ,hare krishna hare ram ",
    {
      expiresIn: 3 * 24 * 60 * 60,
    }
  );
};

export default createSecretToken;
