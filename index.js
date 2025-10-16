require('dotenv').config();
const http = require('http');
const fs = require('fs'); // Módulo para leer archivos (File System)
const path = require('path'); // Módulo para manejar rutas de archivos

const server = http.createServer((req, res) => {
    // Construimos la ruta al archivo index.html de forma segura
    const filePath = path.join(__dirname, 'index.html');

    // Leemos el archivo HTML
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Si hay un error (ej: el archivo no existe), respondemos con un error 500
            res.writeHead(500);
            res.end(`Error del servidor: ${err.code}`);
        } else {
            // Si se leyó correctamente, lo enviamos al navegador
            // Le decimos al navegador que estamos enviando contenido HTML
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = process.env.PORT || 10000;

// Usamos 0.0.0.0 para que sea compatible con Render
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto ${PORT} y mostrando index.html`);
});