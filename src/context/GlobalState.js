import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios'

// Initial state
const initialState = {
    transactions: [],
    error: null,
    loading: true,
    user: null,
    isLoggedIn: false,
    token: null,
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    async function fetchAllData() {
        try {
            const res = await axios.get("/api/v1/transaction")
            dispatch({
                type: 'FETCH_ALL_TRANSACTION',
                payload: res.data.data
            });
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: error.response.data.error
            });
        }
    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transaction/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: error.response.data.error
            });
        }
    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post(`/api/v1/transaction/`, transaction, config)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: error.response.data.error
            });
        }
    }


    async function signUp(user) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(`/api/v1/user/signup`, user, config)
            console.log("response: ", res)
            dispatch({
                type: 'USER_REGISTER',
                payload: res.data.user
            });
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: "Error"
            });
        }
    }


    async function login(user) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(`/api/v1/user/login`, user, config)
            dispatch({
                type: 'USER_REGISTER',
                payload: res.data.user
            });
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: "Error"
            });
        }
    }

    async function logOut() {
        try {
            await axios.get(`/api/v1/user/logout`,)
            dispatch({
                type: 'USER_LOGOUT',
                payload: null
            });
        } catch (error) {
            dispatch({
                type: 'USER_LOGOUT',
                payload: null
            });
        }
    }


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        isLoggedIn: state.isLoggedIn,
        token: state.token,
        user: state.user,
        deleteTransaction,
        addTransaction,
        signUp,
        login,
        logOut,
        fetchAllData
    }}>
        {children}
    </GlobalContext.Provider>);
}