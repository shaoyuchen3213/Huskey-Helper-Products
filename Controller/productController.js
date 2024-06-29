const Products = require("../Model/product.js");

const getProducts = async(req, res) => {
    try {
        const products = await Products.getAllProducts();
        res.status(200).send(products);
    } catch(error) {
        res.status(500).send(error);
    }
}
const getProductDetail = async(req, res) => {
    try{
        const id = req.params.id;
        const details =await Products.getProductDetail(id);
        res.status(200).send(details);
    } catch(error) {
        res.status(500).send(error);
    }
}
const getStyles = async(req, res) => {
    try {
        const id = req.params.id;
        const styles =await Products.getStyles(id);
        res.status(200).send(styles);
    } catch(error) {
        res.status(500).send(error);
    }
}
    
module.exports = {
    getProducts,
    getProductDetail,
    getStyles
}

