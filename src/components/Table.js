import React, { useContext } from 'react'
import BSTable from 'react-bootstrap/Table/'
import { GlobalContext } from '../context/GlobalState'
import TableItem from './TableItem'

// import { data } from '../data'

const Table = () => {

    const { transactions } = useContext(GlobalContext)

    const display = transactions.length > 0
        ? (transactions.map((item, idx) => (
            <TableItem key={idx} item={item} idx={idx} />
        ))) : (
            <tr><td colSpan="6">No items added yet</td></tr>
        )

    return (
        <BSTable striped bordered hover size="sm" id="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>X</th>
                </tr>
            </thead>
            <tbody>
                {display}
            </tbody>
        </BSTable>
    )
}

export default Table
