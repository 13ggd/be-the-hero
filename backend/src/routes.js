const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


/*

GET --> Buscar uma informação no backend
POST --> Criar uma informação no backend
PUT --> Alterar uma informação no backend
DELETE --> Deletar uma informação no backend

*/

/*

TIPOS DE PARÂMETROS:

Query Params --> parâmetros nomeados enviados na rota após '?' (como fazer query)
Route Params --> parâmetros utilizados para identificar recursos
Request body --> corpo da requisição, utilizado para criar ou alterar recursos

*/

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create);



module.exports = routes;