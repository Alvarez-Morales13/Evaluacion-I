const { limpiarTexto } = require('../utils/helpers');

// Arreglo en memoria para almacenar las incidencias
const incidencias = []; 
let idCounter = 1;

// 2: Registrar Incidencia
const registrarIncidencia = (req, res) => {
    let { empleado, area, descripcion, prioridad } = req.body;

    // Validación 1: Todos los campos son obligatorios
    if (!empleado || !area || !descripcion || !prioridad) {
        return res.status(400).json({ mensaje: "Todos los campos obligatorios" });
    }

    // Limpiamos los textos usando nuestro helper.
    empleado = limpiarTexto(empleado); 
    area = limpiarTexto(area); 
    descripcion = limpiarTexto(descripcion); 
    prioridad = limpiarTexto(prioridad);

    // Validación 2: No permitir cadenas vacías
    if (empleado === "") {
        return res.status(400).json({ mensaje: "El empleado no puede estar vacío" });
    } else if (area === "") {
        return res.status(400).json({ mensaje: "El area no puede estar vacía" });
    } else if (descripcion === "") {
        return res.status(400).json({ mensaje: "La descripcion no puede estar vacía" });
    } else if (prioridad === "") {
        return res.status(400).json({ mensaje: "La prioridad no puede estar vacía" });
    }

    // Validación 3: Uso de toLowerCase() para validar la prioridad
    const pMin = prioridad.toLowerCase();
    if (pMin !== "alta" && pMin !== "media" && pMin !== "baja") {
        return res.status(400).json({ mensaje: "Prioridad inválida. Use Alta, Media o Baja" });
    }

    // Uso de push() para agregar el objeto al final del arreglo
    const prioridadGuardar = pMin.charAt(0).toUpperCase() + pMin.slice(1);
    incidencias.push({ 
        id: idCounter++, 
        empleado, 
        area, 
        descripcion, 
        prioridad: prioridadGuardar, 
        estado: "Pendiente" 
    });

    res.status(201).json({ mensaje: "Incidencia registrada correctamente" });
};

module.exports = { registrarIncidencia };

// Ejercicio 3: Listar todas las incidencias (GET)
const listarIncidencias = (req, res) => {
    // Retorna todo el arreglo en formato JSON
    res.json(incidencias);
};

// Ejercicio 4: Buscar Incidencia por ID (GET)
const buscarIncidenciaPorId = (req, res) => {
    const id = parseInt(req.params.id);
    
    // Uso del método find() para buscar el objeto exacto
    const incidencia = incidencias.find(inc => inc.id === id);
    
    // Contemplar alternativas de respuesta con if/else
    if (incidencia) {
        res.json(incidencia);
    } else {
        res.status(404).json({ mensaje: "Incidencia no encontrada" });
    }
};