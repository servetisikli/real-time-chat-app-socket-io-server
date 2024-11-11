import express from "express";
import { getMessages, sendMessage } from "../controllers/chatController.js";

const router = express.Router();

router.get("/messages", getMessages);
router.post("/message", sendMessage);

export default router;
