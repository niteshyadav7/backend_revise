import express from "express";
import { getByOne, getData, postData } from "../controllers/fsControllers.js";

const router = express.Router();
router.post("/person", postData);
router.get("/person", getData);
router.get("/person/:id", getByOne);

export default router;
