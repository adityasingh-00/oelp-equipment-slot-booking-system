const connectToMongo = require("./db");
const cors = require("cors");
const express = require("express");
const axios = require("axios");

connectToMongo();
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;
//app.get("/", (req, res) => {
//  res.send("welcome to my world");
//});
//available routes

app.post("/send-email", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.sendgrid.com/v3/mail/send",
      req.body,
      {
        headers: {
          Authorization:
            "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",
        },
      }
    );

    res.send(response.data);
  } catch (error) {
    console.error("Email not sent:", error);
    res.status(500).send("Email not sent");
  }
});
app.use("/api/students", require("./routes/students"));
app.listen(port, () => {
  console.log(`backend is running at ${port}`);
});
