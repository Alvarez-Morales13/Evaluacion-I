const limpiarTexto = (texto) => typeof texto === 'string' ? texto.trim() : texto;

module.exports = { limpiarTexto };