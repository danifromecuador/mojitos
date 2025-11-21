import './CocktailCard.css'

export const CocktailCard = ({ cocktail }) => {
  return (
    <div className='CocktailCard'>
      <div className="image-favorites">
        <img src={cocktail.image} alt={cocktail.name} />
        <button type="button">♥</button>
      </div>
      <h2>{cocktail.name}</h2>
      <span>${cocktail.price}</span>
      <p>{cocktail.description}</p>
      <div className='actions'>
        <button type="button">delete</button>
        <button type="button">edit</button>
      </div>
    </div>
  )
}
