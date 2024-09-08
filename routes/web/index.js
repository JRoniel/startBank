
/*
* Voltado a rotas WEB
* URL: http://URL/web
* Caminho: /web/
*/

module.exports = (app) => {
    app.get('/web', (req, res) => {
        res.send('Bem-vindo a StartBank!');
    });
}
