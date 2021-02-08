import React,{ createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
const initialState = {
  transaction: [
    { id: 1, text:'Flower', amount: -20},
    { id: 2, text:'salary', amount: 300},
    { id: 3, text:'book', amount: -10},
    { id: 4, text:'camera', amount: 150},
  ]
}

export const GlobalContext = createContext (initialState)

export const Globalprovider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (<GlobalContext.Provider value={{transactions:state.transactions}}>
    {children}
  </GlobalContext.Provider>)
}