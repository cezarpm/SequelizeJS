const app = require("./configs/express-custom");

const port = 8000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
