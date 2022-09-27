'use strict'

var express = require('express')
var ArticleController = require('../Controllers/article')

var router = express.Router();

//Rutas de prueba
router.get('/test-de-controlador', ArticleController.test)
router.post('/datos-curso', ArticleController.datosCurso)

//Rutas útiles
router.post('/save', ArticleController.save)
router.get('/articles/:last?', ArticleController.getArticles)

module.exports = router