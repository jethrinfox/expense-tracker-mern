import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { AiOutlineDelete } from 'react-icons/ai/'
import { withCommas } from '../utils/format'

const TableItem = ({ item, idx }) => {

    const { deleteTransaction } = useContext(GlobalContext)

    const { id, expense, amount, category, date } = item
    const price = amount < 0 ? `-$${Math.abs(amount)}` : `$${amount}`
    const color = amount < 0 ? 'expense' : 'income'

    return (
        <tr className="table-row">
            <td className={color}>{idx + 1}</td>
            <td>{expense}</td>
            <td>{withCommas(price)}</td>
            <td>{category}</td>
            <td>{date.toLocaleDateString()}</td>
            <td><AiOutlineDelete className="delete-icon" onClick={() => deleteTransaction(id)} /></td>
        </tr>
    )
}

export default TableItem
