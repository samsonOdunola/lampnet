const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  unit: { type: String, required: true },
  price: { type: Number, required: true },
});

const productModel = mongoose.model("inventory", productSchema);

module.exports = productModel;
