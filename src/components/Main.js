import React from 'react'
import AddTransaction from './AddTransaction'
import Table from './Table'
import Total from './Total'
// import FilterTable from './components/FilterTable';
// import Graph from './components/Graph';
// import Footer from './components/Footer';

const Main = () => {
    return (
        <div id="main">
            <div className="title">
                <h1>Expense Tracker with ReactJS</h1>
            </div>
            <AddTransaction />
            {/* <FilterTable /> */}
            <div className="table-container">
                <Table />
            </div>
            <Total />
            {/* <Graph /> */}
            {/* <Footer /> */}
        </div>
    )
}

export default Main
