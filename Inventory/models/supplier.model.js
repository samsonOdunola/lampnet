const mongoose = require("mongoose");
const supplierSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

const supplierModel = mongoose.model("suppliers", supplierSchema);

module.exports = supplierModel;
