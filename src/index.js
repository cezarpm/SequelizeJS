const app = require("./configs/express-custom");
const sequelize = require("./database/DatabaseConnection");

const port = 8000;

sequelize
    .authenticate()
    .then(() => console.log("Foi parceiro"))
    .catch(() => console.log("Foi não meu parceirinho"));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
