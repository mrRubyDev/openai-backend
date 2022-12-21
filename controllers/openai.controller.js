const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

const generateTweet = async (req, res) => {
  const { text, prompt, temperature } = req.body;
  console.log("Request body", req.body);
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt} ${text}`,
      temperature,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res.status(200).json({ text: response.data.choices[0].text });
  } catch (error) {
    console.log("Error", error.name, error.message);
    res.status(400).send("Something went wrong. Please try again later.");
  }
};

module.exports = { generateTweet };
