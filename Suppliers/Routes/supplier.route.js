const {
  communication,
  allsuppliers,
  updateSupplier,
  supplier,
} = require("../controllers/suppliers.controller");
const express = require("express");
const router = express.Router();

router.post("/api/communication", communication);
router.get("/getallsuppliers", allsuppliers);
router.post("/updatesupplier", updateSupplier);
router.get("/:id", supplier);

module.exports = router;
