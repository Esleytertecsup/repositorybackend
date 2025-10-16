require('dotenv').config()
const http = require('http')

// Esta función ahora responderá al navegador
function requestController(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bienvenidos al curso'); 
    console.log('Petición recibida')
}

const server=http.createServer(requestController)

const PORT=process.env.PORT || 10000 // Render te dará un puerto, 10000 es para pruebas locales

// Aquí está el cambio clave: añadimos '0.0.0.0'
server.listen(PORT, '0.0.0.0', function(){
    console.log("Aplicacion corriendo en el puerto: " + PORT)
})