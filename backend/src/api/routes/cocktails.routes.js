import {
  getCocktails,
  getCocktail,
  createCocktail,
  editCocktail,
  deleteCocktail
} from "../controllers/cocktails.controller.js"

export const handleCocktailsRoutes = (req, res) => {
  // GET / - mensaje de bienvenida
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200)
    res.end(JSON.stringify({
      message: 'La API Mojitos está funcionando correctamente, use el endpoint /api/v1/cocktails para listar todos los cocteles',
      version: '1.0.0'
    }))
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

  // POST /api/v1/cocktails - crear un nuevo coctel
  else if (req.url === '/api/v1/cocktails' && req.method === 'POST') {
    createCocktail(req, res)
  }

  // PATCH /api/v1/cocktails/:id - editar un coctel
  else if (req.url.match(/^\/api\/v1\/cocktails\/[\w-]+$/) && req.method === 'PATCH') {
    editCocktail(req, res)
  }

  // DELETE /api/v1/cocktails/:id - eliminar un coctel
  else if (req.url.match(/^\/api\/v1\/cocktails\/[\w-]+$/) && req.method === 'DELETE') {
    deleteCocktail(req, res)
  }

  // Ruta no encontrada
  else {
    res.writeHead(404)
    res.end(JSON.stringify({ error: 'La ruta no existe' }))
  }
}
