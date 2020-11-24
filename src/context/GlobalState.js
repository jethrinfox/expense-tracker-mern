import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: [
        { id: 1, expense: 'watermelon', amount: -12, category: 'food' },
        { id: 2, expense: 'tire', amount: -55, category: 'car' },
        { id: 3, expense: 'keyboard', amount: -25, category: 'tech' },
        { id: 4, expense: 'phone', amount: -550, category: 'tech' },
        { id: 5, expense: 'tv', amount: -750, category: 'tech' },
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}