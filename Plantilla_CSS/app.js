const express = require('express');
const path = require('path');

// Crear la aplicación Express
const app = express();
const port = 5023;

// Configurar middleware para archivos estáticos
// Esta línea es importante para servir los archivos CSS
app.use(express.static(path.join(__dirname, 'public')));

// --- RUTAS PRINCIPALES ---
// Ruta 1: Página de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Ruta 2: Página de login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login.html'));
});

// Ruta 3: Página de información
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/about.html'));
});

// Ruta 4: Página de contacto
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/contact.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log(`Rutas disponibles:
    - Inicio: http://localhost:${port}/
    - Login: http://localhost:${port}/login
    - Acerca de: http://localhost:${port}/about
    - Contacto: http://localhost:${port}/contact`);
});