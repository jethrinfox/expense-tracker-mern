import React from 'react'
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import Table from './components/Table';
import Total from './components/Total';
import Container from 'react-bootstrap/Container/';
import { GlobalProvider } from './context/GlobalState';
// import FilterTable from './components/FilterTable';
// import Graph from './components/Graph';
// import Footer from './components/Footer';
import './styles.sass';

const App = () => {

  return (
    <GlobalProvider>
      <Container >
        <div id="glass">
          <Header />
          <AddTransaction />
          {/* <FilterTable /> */}
          <div className="table-container">
            <Table />
          </div>
          <Total />
          {/* <Graph />
        <Footer /> */}
        </div>
      </Container>
    </GlobalProvider>
  )
}

export default App
