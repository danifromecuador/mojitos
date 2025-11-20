import { cocktails } from '../../data/cocktails.data.js'
import { validateCocktail } from '../models/cocktails.models.js'
import {
  createCocktailWithId,
  parseBody,
  cocktailFormationHandler
} from '../utils/cocktails.utils.js'

// Obtener todos los cocteles
export const getCocktails = (_req, res) => {
  res.writeHead(200)
  res.end(JSON.stringify(cocktails))
}

// Obtener un coctel dado su id
export const getCocktail = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const id = url.pathname.split('/')[4]
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

// Editar un coctel
export const editCocktail = async (req, res) => {
  try {
    // Datos del request
    const url = new URL(req.url, `http://${req.headers.host}`)
    const id = url.pathname.split('/')[4]
    const body = await parseBody(req)
    // Buscar si el coctel a editar existe
    const index = cocktails.findIndex(c => c.id === id)
    // En caso de que no exista retorna 404
    if (index === -1) {
      res.writeHead(404)
      res.end(JSON.stringify({ error: 'Coctel no encontrado' }))
      return
    }
    // Formar el objeto coctel con todos sus atributos o campos
    const cocktail = cocktailFormationHandler(index, body, cocktails)
    // Validar todos los campos del coctel
    validateCocktail(cocktail)
    // Reemplazar el coctel antiguo por el coctel nuevo o editado
    cocktails[index] = { ...cocktails[index], ...cocktail }

    res.writeHead(200)
    res.end(JSON.stringify(cocktails[index]))
  } catch (err) {
    res.writeHead(400)
    res.end(JSON.stringify({ error: err.message }))
  }
}

// Eliminar un coctel
export const deleteCocktail = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const id = url.pathname.split('/')[4]
  // Buscar si el coctel a eliminar existe
  const index = cocktails.findIndex(c => c.id === id)
  // En caso de que no exista retorna 404
  if (index === -1) {
    res.writeHead(404)
    res.end(JSON.stringify({ error: 'Coctel no encontrado' }))
    return
  }
  // Eliminar el coctel basado en su index, no confundir con el id que es lo que se recibe del req
  cocktails.splice(index, 1)

  res.writeHead(200)
  res.end(JSON.stringify({ message: 'Coctel eliminado' }))
}
