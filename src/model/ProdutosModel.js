const Sequelize = require("sequelize");
const sequelize = require("../database/DatabaseConnection");

const ProductModel = sequelize.define("product", {
    productName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

ProductModel.sync();

module.exports = ProductModel;
