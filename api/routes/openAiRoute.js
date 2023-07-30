const router = require("express").Router();
const {
  summaryController,
  paragraphController,
  chatbotController,
  questionController,
  jsConverterController,
  imageGeneratorController,
} = require("../controllers/openAiController");

//SUMMARY
router.post("/summary", summaryController);

//PARAGRAPH
router.post("/paragraph", paragraphController);

//CHATBOT
router.post("/chatbot", chatbotController);

//QUESTION GENERATOR
router.post("/question", questionController);

//JS CONVERTER
router.post("/jsconverter", jsConverterController);

//IMAGE GENERATOR
router.post("/imagegenerator", imageGeneratorController);

module.exports = router;
