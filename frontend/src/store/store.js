import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const Store = create(devtools((set) => ({
  bears: 0,
  increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears })
})))
