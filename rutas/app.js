const express = require('express');
const path = require('path');
const routes = require('./routes/rutas');

// Crear instancia de Express
const app = express();

// Puerto de escucha
const port = 5023;

// Configurar middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usar el enrutador
app.use('/', routes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});