//Importar express
const express = require('express');

//Creación de una instancia
const app = express();

//Definir el puerto
const port = 7008;

//Configuración de ruta GET para la raíz ('/')
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
