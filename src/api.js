const express = require("express");
const serverless = require("serverless-http");
const axios = require("axios").default;

const app = express();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://ui8.net/api/home");
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
