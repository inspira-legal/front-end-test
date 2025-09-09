import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface User {
  id: string
  name: string
  email: string
}

interface UserState {
  user: User | null
  loading: boolean
  error: string | null
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  clearUser: () => void
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        loading: false,
        error: null,
        setUser: (user) => set({ user }),
        setLoading: (loading) => set({ loading }),
        setError: (error) => set({ error }),
        clearUser: () => set({ user: null, error: null }),
      }),
      {
        name: 'user-storage',
      }
    ),
    {
      name: 'user-store',
    }
  )
)