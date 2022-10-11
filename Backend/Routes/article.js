'use strict'

var express = require('express')
var ArticleController = require('../Controllers/article')

var router = express.Router();

var multipart = require('connect-multiparty')
var md_upload = multipart({ uploadDir: './upload/articles'})

//Rutas de prueba
router.get('/test-de-controlador', ArticleController.test)
router.post('/datos-curso', ArticleController.datosCurso)

//Rutas útiles
router.post('/save', ArticleController.save)
router.get('/articles/:last?', ArticleController.getArticles)

router.get('/article/:id', ArticleController.getArticle)
router.put('/article/:id', ArticleController.update)
router.delete('/article/:id', ArticleController.delete)
//                    Así aplicamos 👇 el middleware 
router.post('/upload-image/:id', md_upload, ArticleController.upload)
router.get('/get-image/:image', ArticleController.getImage)

module.exports = router