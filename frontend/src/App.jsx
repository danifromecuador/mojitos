import { CocktailList } from './pages/CocktailList'
import { SearchBar } from './components/SearchBar'
import './App.css'

export const App = () => {

  return (
    <div className='app'>
      <h1>Mojito's App</h1>
      <SearchBar />
      <CocktailList />
    </div >
  )
}
