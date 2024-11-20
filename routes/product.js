// -1 require express
const express = require("express");
const {
  addProduct,
  getProducts,
  getProduct,
  deleteProduct,
  editProduct,
} = require("../Controllers/product");

const isAuth = require("../middleware/isAuth");
// -2 routes

const router = express.Router();

// add product
router.post("/add", isAuth, addProduct);

// get all products
router.get("/getAll", getProducts);

// get one product
router.get("/:id", getProduct);

// delete product
router.delete("/:_id", deleteProduct);
// edit product
router.put("/:_id", editProduct);

// -3 export
module.exports = router;
