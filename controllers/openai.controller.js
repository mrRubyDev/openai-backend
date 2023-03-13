const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

const generateTweet = async (req, res) => {
  const { text, prompt, temperature } = req.body;
  console.log("Were hereeeeeeee*******");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  try {
    // const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: `${prompt} ${text}`,
    //   temperature,
    //   max_tokens: 256,
    //   top_p: 1,
    //   frequency_penalty: 0,
    //   presence_penalty: 0,
    // });
    console.log("Were hereeeeeeee*******2");
    res.status(200).send("Sending the right value");
    // res.status(200).send(JSON.stringify(response.data.choices[0].text));
  } catch (error) {
    console.log("Error", error.name, error.message);
    res.status(400).send("Something went wrong. Please try again later.");
  }
};

module.exports = { generateTweet };
