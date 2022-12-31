const express = require("express");
const router = express.Router();



const productController = require("../controllers/productController");

router.get("/", productController.products);
router.post("/", productController.newProduct);
router.get("/:id", productController.product);
router.delete("/:id", productController.delProduct);

module.exports = router;