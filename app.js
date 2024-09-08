const express = require("express");
const consign = require("consign");
const app = express();
const port = 3000;

// Configurando o express para aceitar JSON
app.use(express.json());

// Configurando rotas com Consign
consign()
    .include('routes')
    .into(app);

app.listen(port, () => {
    console.log(`App listening in port: ${port}`);
})

module.exports = { app };