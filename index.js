import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import openAiRoutes from "./routes/openai.js";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// OpenAI Config
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

export const openai = new OpenAIApi(configuration);

// Routes
app.use("/openai", openAiRoutes);

const port = process.env.PORT || 9000;
// app.use("/openai", openAiRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
