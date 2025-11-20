import { cocktails } from '../../data/cocktails.js'

// Obtener todos los cocteles
export const getCocktails = (_req, res) => {
  res.writeHead(200)
  res.end(JSON.stringify(cocktails))
}

// Obtener un coctel dado su id
export const getCocktail = (req, res) => {
  const id = req.url.split('/')[4]
  const cocktail = cocktails.find(c => c.id === id)

  if (cocktail) {
    res.writeHead(200)
    res.end(JSON.stringify(cocktail))
  } else {
    res.writeHead(404)
    res.end(JSON.stringify({ error: 'Coctel no encontrado' }))
  }
}
