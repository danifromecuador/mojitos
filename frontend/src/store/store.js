import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const useStore = create(devtools((set) => ({
  // Array de cocteles que se llena cuando se inicia la App o cuando se actualiza la vista
  cocktails: [],
  setCocktails: (cocktails) => set({ cocktails }, false, 'cocktails/set'),
  // Función para búsqueda dinámica de cocteles
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }, false, 'search/setQuery')
})))
