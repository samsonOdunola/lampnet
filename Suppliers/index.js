const express = require("express");
const App = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4003;
const URI = process.env.URI;
const supplierRouter = require("./Routes/supplier.route");

App.use(express.urlencoded({ extended: true, limit: "50mb" }));
App.use(express.json({ limit: "50mb" }));
App.use(cors());
App.use("/", supplierRouter);

mongoose
  .connect(URI)
  .then((res) => {
    console.log("suppliers DB connected successfully");
    App.listen(port, () => {
      console.log("Server is running on port " + port);
    });
  })
  .catch((err) => {
    console.log("Error in connecting to database");
  });
