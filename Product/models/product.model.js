const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  unit: { type: String, required: true },
  price: { type: Number, required: true },
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
