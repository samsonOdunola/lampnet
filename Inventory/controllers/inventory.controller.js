const inventoryModel = require("../models/inventory.models");
let productModel = require("../models/product.model");
const supplierModel = require("../models/supplier.model");
const axios = require("axios").default;
require("dotenv").config();
const productEndPoint = process.env.PRODUCT_COMM_API;
const supplierEndPoint = process.env.SUPPLIER_COMM_API;

const addInventory = async (req, result) => {
  let product = new productModel({ ...req.body.product });
  let supplier = new supplierModel({ ...req.body.supplier });
  let inventory = new inventoryModel({
    ...req.body,
    product: product._id,
    supplier: supplier._id,
  });

  axios
    .post(productEndPoint, { product, payload: "CREATE_PRODUCT" })
    .then((addProdRes) => {
      if (addProdRes.status == 200) {
        axios
          .post(supplierEndPoint, { supplier, payload: "CREATE_SUPPLIER" })
          .then((addSuppRes) => {
            if (addSuppRes) {
              inventory
                .save()
                .then((addInvRes) => {
                  console.log("new inventory item created");
                  result.status(200).json(addInvRes);
                })
                .catch((addInvErr) =>
                  result.status(500).json({
                    message: "Error in adding inventory to database",
                    addInvErr,
                  })
                );
            }
          })
          .catch((addSuppErr) =>
            result.status(500).json({
              message: "Error in adding Supplier to Database",
              addSuppErr,
            })
          );
      }
    })
    .catch((addProdErr) =>
      result
        .status(500)
        .json({ message: "Error in adding product to Database", addProdErr })
    );
};

//delete inventory function
const deleteInventory = async (req, response) => {
  inventoryModel
    .findOne({ _id: req.body._id })
    .then((findInvRes) => {
      if (findInvRes) {
        let prodID = findInvRes.product;
        let suppID = findInvRes.supplier;
        axios
          .post(productEndPoint, { prodID, payload: "DELETE_PRODUCT" })
          .then((delProdRes) => {
            if (delProdRes.status == 200) {
              axios
                .post(supplierEndPoint, { suppID, payload: "DELETE_SUPPLIER" })
                .then((delSupRes) => {
                  inventoryModel
                    .deleteOne({ _id: req.body._id })
                    .then((delInvRes) => response.status(200).send(delInvRes))
                    .catch((err) =>
                      response.status(400).send({
                        message: "Error in deleteing inventory",
                        err,
                      })
                    );
                })
                .catch((err) =>
                  response
                    .status(500)
                    .json({ message: "error in deleting supplier", err })
                );
            }
          })
          .catch((err) => response.status(500).send(err.code));
      }
    })
    .catch(() => response.status(400).send("Inventory Item not found"));
};

const allInventory = async (req, response) => {
  await inventoryModel
    .find({})
    .then((res) => response.status(200).json(res))
    .catch((err) => response.status(500).send(err));
};

module.exports = { addInventory, deleteInventory, allInventory };
