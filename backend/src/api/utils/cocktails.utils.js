import crypto from 'crypto'

// Crear coctel con crypto
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

// Handler para recrear el coctel completo basado en el body del patch
// Aunque haya sido un update parcial, el objeto coctel debe formarse
// con todos sus campos antes de enviarlo a validación
export const cocktailFormationHandler = (index, body, cocktails) => {
  const cocktail = {
    id: body.id ?? cocktails[index].id,
    name: body.name ?? cocktails[index].name,
    image: body.image ?? cocktails[index].image,
    description: body.description ?? cocktails[index].description,
    price: body.price ?? cocktails[index].price,
  }
  return cocktail
}
