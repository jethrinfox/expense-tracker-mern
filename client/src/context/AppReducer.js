/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch (action.type) {
        case 'FETCH_ALL_TRANSACTION':
            return {
                ...state,
                loading: false,
                transactions: action.payload
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
        case 'ADD_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}