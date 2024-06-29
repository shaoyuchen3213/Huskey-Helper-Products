const express = require('express');
const router = express.Router();
const productController = require("../Controller/productController.js");

router.get('/',productController.getProducts);
router.get('/:id', productController.getProductDetail);
router.get('/:id/styles', productController.getStyles);



module.exports = router;