const supplierModel = require("../models/supplier.model");
const { createSupplier, deleteSupplier } = require("../Events/index");

const allsuppliers = async (req, result) => {
  await supplierModel
    .find({})
    .then((res) => result.status(200).json(res))
    .catch((err) => result.status(500).send(err));
};
const communication = async (req, res) => {
  console.log("########INCOMING CONNECTION###########");
  switch (req.body.payload) {
    case "CREATE_SUPPLIER":
      await createSupplier(req.body.supplier, res);
    case "DELETE_SUPPLIER":
      await deleteSupplier(req.body.suppID, res);
  }
};
const updateSupplier = async (req, result) => {
  const { _id, name, email, phoneNumber } = req.body;
  await supplierModel
    .findOneAndUpdate(
      { _id: _id },
      {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
      }
    )
    .then((res) => result.status(200).json(res))
    .catch((err) => result.status(500).send(err));
};

const supplier = async (req, response) => {
  await supplierModel
    .findOne({ _id: req.params.id })
    .then((res) => response.status(200).json(res))
    .catch((err) => response.status(400).send(err));
};

module.exports = { communication, allsuppliers, updateSupplier, supplier };
