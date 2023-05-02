const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDocs = YAML.load("./api.yaml");

const cors = require("cors");
const proxy = require("express-http-proxy");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
app.use("/product", proxy("http://localhost:4001"));
app.use("/inventory", proxy("http://localhost:4002"));
app.use("/supplier", proxy("http://localhost:4003"));

app.get("/*", (req, res) => {
  res.send("Welcome to gateway");
});

app.listen(4000, () => {
  console.log("Gateway is listening to port 4000");
});
