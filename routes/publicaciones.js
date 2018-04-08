let express = require('express');
let router = express.Router();
//Acceso al modelo de la base de datos
let models = require('../models/index');

//Función Select * from Tabla
router.get('/listaPublicaciones', function (req, res) {
    models.Publicaciones.findAll().then(
        (lista) => {
            res.json(lista);
        }
    ).catch(
        (error) => {
            res.json(error);
        }
    );
});

router.post('/crearPublicacion', function (req, res) {
    let infoPublicacion = {
        "fechaPublicacion": req.body.fechaPublicacion,
        "tituloPublicacion": req.body.tituloPublicacion,
        "imagenPublicacion": req.body.imagenPublicacion,
        "textoPublicacion": req.body.textoPublicacion,
        "imagenPublicacion": req.body.imagenPublicacion,
        "idSemillero": req.body.idSemillero
    };
    models.Publicaciones.create(infoPublicacion).then(
        (nuevaPublicacion, infoCreacion) => {
            res.json(nuevaPublicacion);
        }
    ).catch(
        (error) => {
            res.json(error);
        }
    );
});

router.get('/buscarPublicacion/:id', function (req, res) {
    let idPublicacion = req.params.id;
    models.Publicaciones.find(
        {
            where: {
                "idPublicacion": idPublicacion
            }
        }
    ).then(
        (publicacion) => {
            res.json(publicacion);
        }
    ).catch(
        (error) => {
            res.json(error);
        }
    );
});

router.get('/eliminarPublicacion/:id', function (req, res) {
    let idPublicacion = req.params.id;
    models.Publicaciones.find(
        {
            where: {
                "idPublicacion": idPublicacion
            }
        }
    ).then(
        (publicacion) => {
            publicacion.destroy().then(
                () => {
                    res.json({ "msg": "Se eliminó publicación" });
                }
            );
        }
    ).catch(
        (error) => {
            res.json(error);
        }
    );
});

router.post('/modificarPublicacion/:id', function (req, res) {
    let idPublicacion = req.params.id;
    let infoPublicacion = {
        "fechaPublicacion": req.body.fechaPublicacion,
        "tituloPublicacion": req.body.tituloPublicacion,
        "imagenPublicacion": req.body.imagenPublicacion,
        "textoPublicacion": req.body.textoPublicacion,
        "imagenPublicacion": req.body.imagenPublicacion,
        "idSemillero": req.body.idSemillero
    };
    models.Publicaciones.find(
        {
            where: {
                "idPublicacion": idPublicacion
            }
        }
    ).then(
        (publicacion) => {
            publicacion.updateAttributes(infoPublicacion).then(
                (publicacion) => {
                    res.json(infoPublicacion);
                }
            );
        }
    ).catch(
        (error) => {
            res.json(error);
        }
    );
});

module.exports = router;