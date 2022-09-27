'use strict'

var validator = require('validator')
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
    }

} //END CONTROLLER

module.exports = controller