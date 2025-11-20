import { cocktails } from '../../data/cocktails.js'

// Obtener todos los cocteles
export const getAllCocktails = (_req, res) => {
  res.writeHead(200)
  res.end(JSON.stringify(cocktails))
}
