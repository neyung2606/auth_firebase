import React, { useReducer } from 'react'

export const makeStore = (reducer, initState, key) => {
  const StoreContext = React.createContext()
  const DispatchContext = React.createContext()

  const cacheInitState = initState || JSON.parse(localStorage.getItem(key ?? null))

  const cacheReducer = (state, action) => {
    const newState = reducer(state, action)
    localStorage.setItem(key, JSON.stringify(newState))
    return newState
  }

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(cacheReducer, cacheInitState)
    return (
      <DispatchContext.Provider value={dispatch}>
        <StoreContext.Provider value={store}>
          {children}
        </StoreContext.Provider>
      </DispatchContext.Provider>
    )
  }

  const useStore = () => {
    return React.useContext(StoreContext)
  }
  const useDispatch = () => {
    return React.useContext(DispatchContext)
  }
  return [useStore, useDispatch, StoreProvider]
}
