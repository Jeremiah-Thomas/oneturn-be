const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/routes");

require("dotenv").config();

const mongoString = process.env.MONGODB;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Connected");
});

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use(express.json());
app.use("/api", routes);

app.listen(8000, () => {
  console.log(8000);
});
