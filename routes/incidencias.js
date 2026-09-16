const express = require('express');
const router = express.Router();

const {
    registrarIncidencia,
    listarIncidencias,
    buscarIncidenciasPorID,
    cambiarEstadoDeIncidencias,
    eliminarIncidencias,
    obtenerEstadisticas,
    clasificarIncidencias
} = require('../controllers/incidenciasController');


router.get('/estadisticas', obtenerEstadisticas);
router.post('/', registrarIncidencia);
router.get('/', listarIncidencias);
router.get('/:id', buscarIncidenciasPorID);
router.put('/:id/estado', cambiarEstadoDeIncidencias);
router.delete('/:id', eliminarIncidencias);
router.get('/:id/clasificacion', clasificarIncidencias);

module.exports = router;