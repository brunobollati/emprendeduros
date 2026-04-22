const express = require('express');
const path = require('path');

const app = express();
// Railway asigna el puerto dinámicamente usando process.env.PORT
const port = process.env.PORT || 8080;

// Servir todos los archivos estáticos de la carpeta actual
app.use(express.static(__dirname));

// Cualquier otra ruta redirige al index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor web estático corriendo en el puerto ${port}`);
});
