const express = require('express');
const app = express();
const path = require('path');

// Configurar carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar el motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.get('/', (req, res) => {
    res.render('index', {title: 'saludo'});
});

app.get('/servicios', (req, res) => {
    res.render('servicio', {titleServicio: 'saludo desde los servicios'});
});

app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
