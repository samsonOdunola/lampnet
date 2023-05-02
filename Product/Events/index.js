const productModel = require("../models/product.model");
const createProduct = async (data, response) => {
  if (!data) {
    console.log("ignore this error");
  } else {
    let product = new productModel({ ...data });
    await product
      .save()
      .then((res) => {
        console.log("*********New Product added**********");
        response.status(200).send(res);
      })
      .catch((err) => {
        response.status(500).send("Error in adding product");
      });
  }
};
const deleteProduct = async (data, response) => {
  if (!data) {
    console.log("ignore this error");
  } else {
    await productModel
      .deleteOne({ _id: data })
      .then((res) => {
        console.log("*********Product Deleted**********");
        response.status(200).send(res);
      })
      .catch((err) => {
        response.status(500).send("Error in deleting product");
      });
  }
};

module.exports = { createProduct, deleteProduct };
