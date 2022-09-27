'use strict'

//Cargar módulos de node para crear servidor
var express = require('express');
const bodyParser = require('body-parser');


//Ejecutar express
var app = express();

//Cargar ficheros y rutas
var article_routes = require('./Routes/article')

//Middlewares (se ejecutan antes de cargar una ruta o url de la app)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS


//Añadir prefijos a rutas / Cargar rutas
app.use('/api', article_routes)

//Exportar módulos(fichero actual)
module.exports = app;
