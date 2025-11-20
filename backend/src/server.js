import http from 'http'
import dotenv from 'dotenv'

// Manejar variables de entorno
dotenv.config()

// Definir el puerto
const PORT = process.env.PORT || 3000

// Crear el servidor
const server = http.createServer((request, response) => {
  // Headers por defecto
  response.setHeader('Content-Type', 'application/json')

  // Rutas
  if (request.url === '/' && request.method === 'GET') {
    response.writeHead(200)
    response.end(JSON.stringify({ message: 'Server running' }))
  } else {
    response.writeHead(404)
    response.end(JSON.stringify({ error: 'Not Found' }))
  }
})

// Inicializar el server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
