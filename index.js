require('dotenv').config()
const http = require('http')

// Esta es la función corregida que SÍ responde a las peticiones
function requestController(req, res){
    // Enviamos una respuesta al cliente (Render en este caso)
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bienvenidos al curso");

    // Mostramos un mensaje en la consola para saber que funcionó
    console.log("Petición recibida y respuesta enviada.");
}

const server = http.createServer(requestController);

// Render nos da el puerto a través de las variables de entorno
const PORT = process.env.PORT || 10000;

// Escuchamos en el puerto y en la dirección IP correcta para Render
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Aplicación corriendo en el puerto ${PORT}`);
});