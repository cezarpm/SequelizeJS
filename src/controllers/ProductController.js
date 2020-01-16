const ProductModel = require("../model/ProdutosModel");

module.exports = {
    async index(req, res) {
        const data = await ProductModel.findAll();
        res.json(data);
    },

    async store(req, res) {
        const { productName } = req.body;

        const product = await ProductModel.create({
            productName
        });

        res.json(product);
    }
};
