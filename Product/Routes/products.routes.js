const {
  deleteProduct,
  updateProduct,
  allProducts,
  communication,
  product,
} = require("../controllers/product.controller");
const express = require("express");
const router = express.Router();

// router.post("/add_product", addProduct);
router.post("/delete_product", deleteProduct);
router.post("/update_product", updateProduct);
router.get("/all_products", allProducts);
router.get("/:id", product);
router.post("/product-api/communication", communication);

module.exports = router;
