import { Routes, Route } from 'react-router-dom'
import { CocktailList } from './pages/CocktailList'
import { CocktailDetail } from './pages/CocktailDetail'
import { CocktailCreate } from './pages/CocktailCreate'
import { SearchBar } from './components/SearchBar'
import './App.css'

export const App = () => {
  return (
    <div className='app'>
      <h1 className='app-title'>Mojito's App</h1>
      <SearchBar />
      
      <Routes>
        <Route path="/" element={<CocktailList />} />
        <Route path="/cocktail/:id" element={<CocktailDetail />} />
        <Route path="/create" element={<CocktailCreate />} />
      </Routes>
    </div>
  )
}
