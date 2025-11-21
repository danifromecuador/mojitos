import './CocktailCard.css'

export const CocktailCard = ({ cocktail }) => {
  return (
    <div className='cocktail-card'>
      <div className="image-favorites">
        <img src={cocktail.image} alt={cocktail.name} />
        <button type="button">♥</button>
      </div>
      <div className="name-price">
        <h2>{cocktail.name}</h2>
        <span>${cocktail.price}</span>
      </div>
      <div className='actions'>
        <button type="button">delete</button>
        <button type="button">edit</button>
      </div>
    </div>
  )
}
