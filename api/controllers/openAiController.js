const dotenv = require("dotenv");
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//summary
const summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Summarize this \n${text}`,
      max_tokens: 300,
      temperature: 0.3,
    });
    if (data) {
      if (data.choices[0].text) {
        res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: err.message,
    });
  }
};

//paragraph
const paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write a detail paragraph about \n${text}`,
      max_tokens: 300,
      temperature: 0.3,
    });
    if (data) {
      if (data.choices[0].text) {
        res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: err.message,
    });
  }
};

//chatbot
const chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant who answers all questions correctly.",
        },
        { role: "user", content: "Hi how are you?" },
        {
          role: "system",
          content:
            "As a AI assistant I do not have emotions, but I can help with with your questions",
        },
        {
          role: "user",
          content: `${text}`,
        },
      ],
      max_tokens: 50,
      temperature: 0.3,
    });
    if (data) {
      if (data.choices[0].message) {
        res.status(200).json(data.choices[0].message);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: err.message,
    });
  }
};

//question generator
const questionController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate 10 high quality and technical interview questions for \n${text}`,
      max_tokens: 500,
      temperature: 0.3,
    });
    if (data) {
      if (data.choices[0].text) {
        res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: err.message,
    });
  }
};

//js converter
const jsConverterController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `Convert these instructions into jsvascript code \n${text}`,
      max_tokens: 300,
      temperature: 0.2,
    });
    if (data) {
      if (data.choices[0].text) {
        res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: err.message,
    });
  }
};

//image generator
const imageGeneratorController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createImage({
      prompt: `Generate a real and high quality image of ${text} `,
      n: 1,
      size: "512x512",
    });
    if (data) {
      if (data.data[0].url) {
        res.status(200).json(data.data[0].url);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: err.message,
    });
  }
};

module.exports = {
  summaryController,
  paragraphController,
  chatbotController,
  questionController,
  jsConverterController,
  imageGeneratorController,
};
