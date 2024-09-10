const express = require("express");
const consign = require("consign");
const app = express();
const port = 3000;

// Configurando o express para aceitar JSON
app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); //  Aceitar qualquer origem
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS"); //  Aceitar qualquer método
    next();
});

// Configurando rotas com Consign
consign()
    .include('routes')
    .into(app);

app.listen(port, () => {
    console.log(`App listening in port: ${port}`);
})

module.exports = { app };