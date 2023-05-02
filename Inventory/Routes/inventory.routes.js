const {
  addInventory,
  deleteInventory,
  allInventory,
} = require("../controllers/inventory.controller");

const express = require("express");
const router = express.Router();

router.post("/add_inventory", addInventory);
router.post("/delete_inventory", deleteInventory);
router.get("/getallinventory", allInventory);

module.exports = router;
