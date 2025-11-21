import { useStore } from '../store/store'
import './SearchBar.css'

export const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useStore()

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className='searchbar'>
      <input
        type="text"
        className='searchbar-input'
        placeholder='Busca por el nombre del coctel'
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  )
}
