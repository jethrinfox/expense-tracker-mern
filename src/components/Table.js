import React from 'react'
import { Table as BSTable } from 'react-bootstrap'

import { data } from '../data'

const Table = () => {
    return (
        <BSTable striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Expense</th>
                    <th>Amount</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, idx) => {
                        const { expense, amount, category } = item
                        const price = amount < 0 ? `-$${Math.abs(amount)}` : `$${amount}`
                        return <tr>
                            <td>{idx + 1}</td>
                            <td>{expense}</td>
                            <td>{price}</td>
                            <td>{category}</td>
                        </tr>
                    })
                }

            </tbody>
        </BSTable>
    )
}

export default Table
