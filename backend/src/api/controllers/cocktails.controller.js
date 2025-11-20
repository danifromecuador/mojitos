import crypto from 'crypto'
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

// Helper para parsear JSON del body
const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', chunk => {
      data += chunk
    })
    req.on('end', () => {
      try {
        resolve(JSON.parse(data))
      } catch (err) {
        reject(err)
      }
    })
  })
}

// Crear un nuevo coctel
export const createCocktail = async (req, res) => {
  try {
    const body = await parseBody(req)

    // Validar campos
    if (!body.name || !body.price || !body.description || !body.image) {
      res.writeHead(400)
      res.end(JSON.stringify({ error: 'Faltan campos requeridos' }))
      return
    }

    // Crear cóctel con UUID
    const newCocktail = {
      id: crypto.randomUUID(),
      ...body
    }

    cocktails.push(newCocktail)

    res.writeHead(201)
    res.end(JSON.stringify(newCocktail))
  } catch (err) {
    res.writeHead(400)
    res.end(JSON.stringify({ error: 'JSON inválido' }))
  }
}
