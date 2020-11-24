import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { AiOutlineDelete } from 'react-icons/ai/'
import { withCommas } from '../utils/format'

const TableItem = ({ item, idx }) => {

    const { deleteTransaction } = useContext(GlobalContext)

    const { id, expense, amount, category } = item
    const price = amount < 0 ? `-$${Math.abs(amount)}` : `$${amount}`

    return (
        <tr>
            <td>{idx + 1}</td>
            <td>{expense}</td>
            <td>{withCommas(price)}</td>
            <td>{category}</td>
            <td><AiOutlineDelete onClick={() => deleteTransaction(id)} /></td>
        </tr>
    )
}

export default TableItem
