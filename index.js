const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");

const openAiRoutes = require("./routes/openai.routes");
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", openAiRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
