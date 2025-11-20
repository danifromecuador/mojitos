import crypto from 'crypto'

// Crear coctel con UUID
export const createCocktailWithId = (body) => {
  const newCocktail = {
    id: crypto.randomUUID(),
    ...body
  }
  return newCocktail
}

// Helper para parsear JSON del body
export const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => {
      try { resolve(JSON.parse(data)) }
      catch (err) { reject(err) }
    })
  })
}