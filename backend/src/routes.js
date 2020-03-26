const express = require('express');

const routes = express.Router();

const ongsController = require('./controllers/ongsController')
const incidentsController = require('./controllers/incidentsController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongsController.index);
routes.post('/ongs', ongsController.create)

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/incidents/:id', profileController.index);

module.exports = routes;