const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/oelp-project";
const connectToMongo = () => {
  mongoose.connect(mongoURI);
  console.log("connected to mogo DB");
};
module.exports = connectToMongo;
