import { useEffect } from 'react'
import { useCocktails } from '../store/hooks/useCocktails'
import { CocktailCard } from '../components/CocktailCard'
import { SearchBar } from '../components/SearchBar'
import './CocktailList.css'

export const CocktailList = () => {
  const { cocktails, fetchAllCocktails } = useCocktails()
  useEffect(() => {
    fetchAllCocktails()
  }, [])

  return (
    <div className='cocktail-list'>
      CocktailList Component
      {cocktails.map(cocktail => (
        <CocktailCard key={cocktail.id} cocktail={cocktail} />
      ))}
    </div>
  )
}