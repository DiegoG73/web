'use strict'

var validator = require('validator')
const article = require('../models/article')
const { find } = require('../models/article')
var Article = require('../models/article')

var controller = {

    datosCurso: (req, res) => {
        var hola = req.body.hola
    
        return res.status(200).send({
            curso: 'Master en FrameWorks JS',
            autor: 'Diego Guzmán',
            url: 'pruebas1.com',
            hola
        })
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de artículos'
        })
    },

    save: (req, res) => {
        //Recoger parámetros por post
        var params = req.body;
        console.log('params')

        //Validar datos(validator)
        try{
            var validateTitle = !validator.isEmpty(params.title)
            var validateContent = !validator.isEmpty(params.content)
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar!'
            })
        }

        if(validateTitle && validateContent){
            //Crear el objeto a guardar
            var article = new Article()

            //Asignar valores
            article.title = params.title
            article.content = params.content
            article.image = null

            //Guardar el artículo
            article.save((err, articleStored) => {

                if(err || !articleStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El artículo no se ha guardado!'
                    })
                }

                //Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    article: articleStored

            })
            })  
        }else{
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son válidos'
            })
        }
    },

    getArticles: (req, res) => {

        var query = Article.find({})

        var last = req.params.last
        if(last || last != undefined){
            query.limit(5)
        }

        //Find
        query.sort('-id').exec((err, articles) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los artículos'
                })
            }

            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay artículos para mostrar'
                })
            }

            return res.status(200).send({
                status: 'success',
                articles
            })
        })
    },

    getArticle: (req, res) => {
        
        //Recoger el ID de la url
        var articleId =  req.params.id

        //Comprobar que existe
        if(!articleId || articleId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el artículo'
            })
        }

        //Buscar el artículo
        Article.findById(articleId, (err, article) => {

            if(err || !article){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el artículo'
                })
            }

            //Devolverlo en JSON
        
            return res.status(404).send({
            status: 'success',
            article
            })

        })
    },

    update: (req, res) => {
        //Recoger el ID del artículo por la URL
        var articleId = req.params.id

        //Recoger los datos que llegan por put
        var params = req.body

        //Validar datos
        try{
            var validate_title = !validator.isEmpty(params.title)
            var validate_content = !validator.isEmpty(params.content)
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            })
        }

        if(validate_title && validate_content){
            //Find and update
            Article.findOneAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdated) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar'
                    })
                }
                if(!articleUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el artículo'
                    })
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                })
            })
        }else{
            return res.status(200).send({
                status: 'error',
                message: 'La validación no es correcta'
            })
        }
    },

    delete: (req, res) => {
        //Recoger el ID de la URL
        var articleId = req.params.id
        //Find and delete
        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al volar'
                })
            }
            if(!articleRemoved){
                return res.status(200).send({
                    status: 'error',
                    message: 'No se ha borrado el artículo, posiblemente no exista'
                })
            }

            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            })
        })
        return res.status(200).send({
            status: 'error',
            message: 'El artículo se ha eliminado'
        })
    }

} //END CONTROLLER

module.exports = controller