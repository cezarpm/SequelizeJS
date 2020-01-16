const { Router } = require("express");
const ProductController = require("./controllers/ProductController");

const routes = Router();

routes.get("/product", ProductController.index);
routes.post("/product", ProductController.store);

module.exports = routes;
