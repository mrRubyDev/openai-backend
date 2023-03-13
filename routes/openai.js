import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { openai } from "../index.js";

dotenv.config();
const router = express.Router();

router.post("/text", async (req, res) => {
  try {
    const { text } = req.body;

    const result = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:
        text +
        `I need help repurposing my newsletter (the previous text) for a twitter thread, but I need it done in the following format: #Headline, #Short sentence and 4 bullet points. Make it into 3 tweets, and return them in a json format.`,
      max_tokens: 2048,
      temperature: 0.5,
      frequency_penalty: 0.5,
    });

    const { data } = result;
    res.status(200).json({ data: data.choices });
  } catch (e) {
    console.log("error", e.message);
    res.status(500).json({ error: e.message });
  }
});

export default router;
