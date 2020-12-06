import React from 'react'
import AddTransaction from './AddTransaction'
import Table from './Table'
import Total from './Total'


const Main = () => {
    return (
        <div id="main">
            <div className="title">
                <h1>Expense Tracker with ReactJS</h1>
            </div>
            <AddTransaction />
            <div className="table-container">
                <Table />
            </div>
            <Total />
        </div>
    )
}

export default Main
