const productModel = require("../models/product.model");
const { createProduct, deleteProduct } = require("../Events/index");

const updateProduct = async (req, result) => {
  const { _id, name, description, price, unit } = req.body;
  await productModel
    .findOneAndUpdate(
      { _id: _id },
      {
        name: name,
        description: description,
        price: price,
        unit: unit,
      }
    )
    .then((res) => result.status(200).json(res))
    .catch((err) => result.status(500).send(err));
};

const allProducts = async (req, result) => {
  await productModel
    .find({})
    .then((res) => result.status(200).json(res))
    .catch((err) => result.status(500).send(err));
};

const product = async (req, response) => {
  await productModel
    .findOne({ _id: req.params.id })
    .then((res) => response.status(200).json(res))
    .catch((err) => response.status(400).send(err));
};

const communication = async (req, res) => {
  console.log("########INCOMING CONNECTION###########");
  switch (req.body.payload) {
    case "CREATE_PRODUCT":
      await createProduct(req.body.product, res);
    case "DELETE_PRODUCT":
      await deleteProduct(req.body.prodID, res);
  }
};

module.exports = {
  deleteProduct,
  updateProduct,
  allProducts,
  communication,
  product,
};
