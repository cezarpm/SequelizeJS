const { Router } = require("express");

const routes = Router();

routes.get("/teste", (req, res) => {
    console.log("Chegou aqui meu parceiro");
    return res.json({ message: "Salve" });
});

module.exports = routes;
