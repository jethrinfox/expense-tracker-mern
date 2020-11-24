import React from 'react'
import { Table as BSTable } from 'react-bootstrap'

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
                <tr>
                    <td>1</td>
                    <td>Doctor</td>
                    <td>$200</td>
                    <td>Health</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Food</td>
                    <td>$30</td>
                    <td>Basics</td>
                </tr>
            </tbody>
        </BSTable>
    )
}

export default Table
