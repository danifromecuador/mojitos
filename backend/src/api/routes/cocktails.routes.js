import { getCocktails, getCocktail } from "../controllers/cocktails.controller.js"

export const handleCocktailsRoutes = (req, res) => {
  // GET / - mensaje de bienvenida
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200)
    res.end(JSON.stringify({ message: 'Servidor en ejecucion' }))
  }

  // GET /health - verificar estado del servidor
  else if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200)
    res.end(JSON.stringify({ status: 'OK' }))
  }

  // GET /api/v1/cocktails - obtener todos los cocteles
  else if (req.url === '/api/v1/cocktails' && req.method === 'GET') {
    getCocktails(req, res)
  }

  // GET /api/v1/cocktails/:id - obtener un coctel dado su id
  else if (req.url.match(/^\/api\/v1\/cocktails\/[\w-]+$/) && req.method === 'GET') {
    getCocktail(req, res)
  }

  // Ruta no encontrada
  else {
    res.writeHead(404)
    res.end(JSON.stringify({ error: 'La ruta no existe' }))
  }
}