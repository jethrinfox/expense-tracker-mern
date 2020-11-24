import React from 'react'

import './App.css';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import FilterTable from './components/FilterTable';
import Table from './components/Table';
import Total from './components/Total';
import Graph from './components/Graph';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container/';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Container>
        <AddTransaction />
        <FilterTable />
        <Table />
        <Total />
        {/* <Graph />
        <Footer /> */}
      </Container>
    </GlobalProvider>
  )
}

export default App
