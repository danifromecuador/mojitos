import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
export const useStore = create(devtools((set) => ({
  cocktails: [],
  setCocktails: (cocktails) => set({ cocktails }, false, 'cocktails/set'),

  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }, false, 'search/setQuery'),

  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  addFavorite: (cocktailId) => set(state => {
    const newFavs = [...state.favorites, cocktailId]
    localStorage.setItem('favorites', JSON.stringify(newFavs))
    return { favorites: newFavs }
  }),
  removeFavorite: (cocktailId) => set(state => {
    const newFavs = state.favorites.filter(id => id !== cocktailId)
    localStorage.setItem('favorites', JSON.stringify(newFavs))
    return { favorites: newFavs }
  }),
  toggleFavorite: (cocktailId) => set(state => {
    const isFav = state.favorites.includes(cocktailId)
    const newFavs = isFav 
      ? state.favorites.filter(id => id !== cocktailId)
      : [...state.favorites, cocktailId]
    localStorage.setItem('favorites', JSON.stringify(newFavs))
    return { favorites: newFavs }
  }),
})))
