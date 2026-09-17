const express = require('express');
const rutasIncidencias = require('./routes/incidencias');

const app = express();
const port = 3220;

app.use(express.json());
app.use('/api/incidencias', rutasIncidencias);

app.listen(port, () => {
    console.log(`Servidor de TechSupport S.A. corriendo en http://localhost:${port}`);
});