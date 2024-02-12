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

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api", routes);

app.listen(process.env.PORT || 8000, () => {
  console.log(8000);
});
