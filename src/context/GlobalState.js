import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

// Initial state
const initialState = {
    transactions: [],
    error: null,
    user: null,
    isLoggedIn: false,
}

// Axios Instance
const baseUrl = process.env.NODE_ENV === "production" ? (
    "https://evening-escarpment-92494.herokuapp.com"
) : ""

const instance = axios.create({
    withCredentials: true,
    baseURL: baseUrl
})

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const history = useHistory()

    // Actions
    async function fetchAllData() {
        if (state.user) {
            const url = `/api/v1/transaction?user_id=${state.user._id}`
            try {
                const res = await instance.get(url)
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
    }

    async function deleteTransaction(id) {
        try {
            await instance.delete(`/api/v1/transaction/${id}`)
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
            const res = await instance.post(`/api/v1/transaction/`, transaction, config)
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
            const res = await instance.post(`/api/v1/user/`, user, config)
            dispatch({
                type: 'USER_REGISTER',
                payload: res.data.user
            });
        } catch (error) {
            if (error.response.data.error === "User already exists") {
                dispatch({
                    type: 'ERROR',
                    payload: "User already exists"
                });
                return
            }
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
            const res = await instance.post(`/api/v1/user/login`, user, config)
            dispatch({
                type: 'USER_REGISTER',
                payload: res.data.user
            });
            history.push('/')
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: "Error"
            });
        }
    }

    async function getUser() {
        try {
            const res = await instance.get(`/api/v1/user/`)
            if (res.user) {
                dispatch({
                    type: 'USER_REGISTER',
                    payload: res.data.user
                });
            }
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: "Error"
            });
        }
    }

    async function logOut() {
        try {
            await instance.remove(`/api/v1/user/`,)
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
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        deleteTransaction,
        addTransaction,
        signUp,
        login,
        getUser,
        logOut,
        fetchAllData
    }}>
        {children}
    </GlobalContext.Provider>);
}