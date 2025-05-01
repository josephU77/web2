const http = require('http');

//definimos un puerto de salida del servidor
const port = 3005;

//crear un servidor
const server = http.createServer((req, res) => {
    //establecer el encabezado de respuesta
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    //Enviamos la respuesta
    res.end('Hola mundo con NODE.js');
});

//Escuchar el puerto
server.listen(port, () => {
    console.log(`Servidor ejecutandose por medio de http://localhost:${port}`);
});