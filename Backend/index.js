'use strict'

var mongoose = require('mongoose');
var app = require('./app')
var port = 3900

mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/api_rest_blog', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('La conexión a la base de datos se ha realizado correctamente')

    //Crear servidor y ponerme a escuchar peticiones HTTP
    app.listen(port, () => {
        console.log('Servidor corriendo en https://localhost:' + port)
    })
});