import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCocktails } from '../store/hooks/useCocktails'
import { useStore } from '../store/store'
import { CocktailCard } from '../components/CocktailCard'
import './CocktailList.css'

export const CocktailList = () => {
  const { cocktails, fetchAllCocktails } = useCocktails()
  const { searchQuery } = useStore()
  
  useEffect(() => {
    fetchAllCocktails()
  }, [])

  const displayedCocktails = searchQuery
    ? cocktails.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cocktails

  return (
    <div className='cocktail-list-container'>
      <div className='cocktail-list-header'>
        <Link to="/create" className='btn-create'>
          Crear coctel
        </Link>
      </div>

      <div className='cocktail-list'>
        {displayedCocktails.length === 0 ? (
          <div className='no-results'>
            <p>No se encontraron cócteles</p>
            {searchQuery && <p className='search-hint'>Intenta con otro término de búsqueda</p>}
          </div>
        ) : (
          displayedCocktails.map(cocktail => (
            <CocktailCard key={cocktail.id} cocktail={cocktail} />
          ))
        )}
      </div>
    </div>
  )
}
