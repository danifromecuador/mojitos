export const validateCocktail = (cocktail) => {
  const { name, image, description, price } = cocktail
  if (!name) {
    throw new Error("Ingresa el nombre del coctel")
  }
  if (!description) {
    throw new Error("Ingresa la descripción del coctel")
  }
  if (!image) {
    throw new Error("Ingresa la imagen del coctel")
  }

  // Convertir de string a number el precio, antes de hacer la validación
  // El endpoint acepta tanto string como number para el price
  const priceNum = Number(price)
  if (isNaN(priceNum) || priceNum < 3 || priceNum > 10) {
    throw new Error('Ingrese un precio entre 3 y 10 USD, use solo números')
  }
}
