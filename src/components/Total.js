import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Total = () => {

    const { transactions } = useContext(GlobalContext)

    let total = transactions.map((transaction) => transaction.amount)
    total = total.reduce((acc, item) => (acc += item), 0).toFixed(2)
    total = total < 0 ? `-$${Math.abs(total)}` : `$${total}`

    return (
        <div>
            Total: {total}
        </div>
    )
}

export default Total
