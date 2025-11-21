// import { Store } from './store/store'
import { CocktailList } from './pages/CocktailList'
import './App.css'

export const App = () => {
  // const store = Store()

  return (
    <div className='app'>
      <p>Componente App</p>
      {/* <span>{store.bears} bears around here...</span>
      <button onClick={() => store.increaseBears()} type="button">+1</button> */}
      <CocktailList />
    </div >
  )
}
