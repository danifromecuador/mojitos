import http from 'http'
import dotenv from 'dotenv'
import { handleCocktailsRoutes } from './api/routes/cocktails.routes.js'

dotenv.config()

// Definir el puerto
const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json')

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Manejar preflight OPTIONS
  if (req.method === 'OPTIONS') {
    res.writeHead(200)
    res.end()
    return
  }

  // Manejo de rutas
  handleCocktailsRoutes(req, res)
})

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
