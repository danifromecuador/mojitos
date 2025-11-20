export const handleCocktailsRoutes = (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200)
    res.end(JSON.stringify({ message: 'Server running' }))
  } else if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200)
    res.end(JSON.stringify({ status: 'OK' }))
  } else {
    res.writeHead(404)
    res.end(JSON.stringify({ error: 'Not Found' }))
  }
}