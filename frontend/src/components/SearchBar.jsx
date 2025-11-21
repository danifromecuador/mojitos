import './SearchBar.css'

export const SearchBar = () => {
  return (
    <div className='searchbar'>
      <input
        type="text"
        name=""
        id=""
        className='searchbar-input'
        placeholder='Busca por el nombre del coctel'
      />
      <button type="button">Buscar</button>
    </div>
  )
}