const express = require("express");
const Product = require('../models/product.model.js')
const router = express.Router();
const { getProducts, getProduct, createProduct,
    updateProduct, deleteProduct}
    = require('../controller/product.controller.js')
//all product
router.get('/', getProducts);
//single product
router.get("/:id", getProduct);
//create
router.post("/", createProduct);
//delete
router.put("/:id", updateProduct);
//update
router.delete("/:id", deleteProduct)
module.exports = router;