const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

//file imports
const connectDB = require("./config/dbConfig");
const authRoutes = require("./routes/authRoute");
const openaiRoutes = require("./routes/openAiRoute");
const errorHandler = require("./middlewares/errorMiddleware");

//config
dotenv.config();

//middleware
app.use(errorHandler);
app.use(express.json());
app.use(
  cors({
    origin: ["https://protoolkit.netlify.app"],
  })
);

//API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", openaiRoutes);

//DB Connection
const PORT = process.env.PORT || 5000;
connectDB(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server on port:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
