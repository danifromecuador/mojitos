import { cocktails } from '../../data/cocktails.data.js'
import { validateCocktail } from '../models/cocktails.models.js'
import { createCocktailWithId, parseBody } from '../utils/cocktails.utils.js'

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

// Crear un nuevo coctel
export const createCocktail = async (req, res) => {
  try {
    const body = await parseBody(req)
    validateCocktail(body)
    const cocktail = createCocktailWithId(body)
    cocktails.push(cocktail)

    res.writeHead(201)
    res.end(JSON.stringify(cocktail))
  } catch (err) {
    res.writeHead(400)
    res.end(JSON.stringify({ error: err.message }))
  }
}
