const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const inventorySchema = mongoose.Schema({
  currentStock: { type: Number, required: true },
  reorderStock: { type: Number, required: true },
  supplier: { type: Schema.Types.ObjectId, ref: "suppliers", required: true },
  product: { type: Schema.Types.ObjectId, ref: "products", required: true },
});

const inventoryModel = mongoose.model("inventories", inventorySchema);

module.exports = inventoryModel;
