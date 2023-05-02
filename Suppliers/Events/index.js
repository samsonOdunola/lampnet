const supplierModel = require("../models/supplier.model");
const createSupplier = async (data, response) => {
  if (!data) {
    console.log("ignore this error - supplie");
    return false;
  } else {
    let supplier = new supplierModel({ ...data });
    await supplier
      .save()
      .then((res) => {
        console.log("*********New Supplier added**********");
        response.status(200).send(res);
      })
      .catch((err) => {
        response.status(500).send("Error in adding supplier");
      });
  }
};

const deleteSupplier = async (data, response) => {
  if (!data) {
    console.log("ignore this error - supplier");
  } else {
    await supplierModel
      .deleteOne({ _id: data })
      .then((res) => {
        console.log("*********Supplier Deleted**********");
        response.status(200).send(res);
      })
      .catch((err) => {
        response.status(500).send("Error in deleting supplier");
      });
  }
};

module.exports = { createSupplier, deleteSupplier };
