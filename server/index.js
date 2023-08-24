import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
// LOCAL import should be in fullName:⛔MUST BE fullName with extension
/**
 * NOTE:1. MUST BE THE LOCAL IMPORT WITH THE EXTENSION
 *  2. ANY WHERE.
 */
import router from "./routes/fsRouter.js";
import ConnectionDatabase from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT;
const HOST_NAME = process.env.HOST_NAME;
const DB = process.env.MONGO;


// console.log(DB);

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(PORT, () => {
  try {
    console.log(`server running on ${HOST_NAME}:${PORT} `);
  } catch (err) {
    console.log(err);
  }
});

ConnectionDatabase(DB);
