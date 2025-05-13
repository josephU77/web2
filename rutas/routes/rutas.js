const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta principal - página de inicio
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Ruta de login - formulario de inicio de sesión
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
});

// Ruta de about - información sobre el sitio
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/about.html'));
});

// Ruta de contacto - formulario de contacto
router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contact.html'));
});

module.exports = router;