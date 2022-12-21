const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const openAiRoutes = require("./routes/openai.routes");
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use("/openai", openAiRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
