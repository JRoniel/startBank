
/*
* Voltado a rotas API
* URL: http://localhost:3000/api
* Caminho: /api/
*/

module.exports = (app) => {
    app.get('/api', (req, res) => res.send({
        message: 'Bem-vindo a API StartBank!'
    }));
}

