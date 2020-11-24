import React, { useContext } from 'react'
import { Badge } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'
import { withCommas } from '../utils/format'

const Total = () => {

    const { transactions } = useContext(GlobalContext)

    const totalArr = transactions.map((transaction) => transaction.amount)
    const total = totalArr.reduce((acc, item) => (acc += item), 0).toFixed(2)
    const formated = total < 0 ? `-$${Math.abs(total)}` : `$${total}`

    const variant = total < 0 ? 'danger' : 'success'

    return (
        <div>
            <h3>
                <Badge variant={variant}>Total: {withCommas(formated)}</Badge>
            </h3>
        </div>
    )
}

export default Total
