import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const useStore = create(devtools((set) => ({
  cocktails: [],
  setCocktails: (cocktails) => set({ cocktails }, false, 'cocktails/set'),
})))
