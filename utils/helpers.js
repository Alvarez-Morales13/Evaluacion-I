// Función reutilizable para limpiar espacios en blanco (Uso de trim)
const limpiarTexto = (texto) => {
    if (typeof texto === 'string') {
        return texto.trim();
    }
    return texto;
};

module.exports = { limpiarTexto };