import React,{ createContext, useReducer } from 'react';

const initialState = {
  transaction: [
    { id: 1, text:'Flower', amount: -20},
    { id: 2, text:'salary', amount: 300},
    { id: 3, text:'book', amount: -10},
    { id: 4, text:'camera', amount: 150},
  ]
}

