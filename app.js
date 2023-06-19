const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jazzyRouters = require("./router/jazzyRouters");
const port = process.env.PORT || 4040;
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());

const mongoDB_url = process.env.DBURL;

mongoose
  .connect(mongoDB_url)
  .then(() => {
    console.log("DB connected succesfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Welcome home");
});

app.use("/burger", jazzyRouters);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
