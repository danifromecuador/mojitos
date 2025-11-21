import { useEffect } from 'react'
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
    <div className='cocktail-list'>
      {displayedCocktails.map(cocktail => (
        <CocktailCard key={cocktail.id} cocktail={cocktail} />
      ))}
    </div>
  )
}
