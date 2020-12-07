/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch (action.type) {
        case 'FETCH_ALL_TRANSACTION':
            return {
                ...state,
                transactions: action.payload,
                loading: false,
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'USER_REGISTER':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                loading: false,
            }
        case 'USER_LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                user: action.payload,
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case 'LOADING':
            return {
                ...state,
                loading: action.payload,
            }
        default:
            return state;
    }
}