import { createStore } from 'zustand/vanilla'
import {persist} from 'zustand/middleware'

export type GlobalState = {
  isLoggedIn: boolean;
}

export type GlobalActions = {
  login: () => void;
  logout: () => void;
}

export type GlobalStore = GlobalState & GlobalActions

export const defaultInitState: GlobalState = {
  isLoggedIn: false,
}

export const createGlobalStore = (
  initState: GlobalState = defaultInitState,
) => {
  return createStore<GlobalStore>()((set) => ({
    ...initState,
    login: () => set((state) => ({ isLoggedIn: true })),
    logout: () => set((state) => ({ isLoggedIn: false })),
  }))
}
