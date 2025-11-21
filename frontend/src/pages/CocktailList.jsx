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
  console.log(cocktails)
  
  return (
    <div className='CocktailList'>
      CocktailList Component
      <SearchBar />
      
    </div>
  )
}