import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container/';
import { GlobalProvider } from './context/GlobalState';
import './styles/styles.sass';

import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Header from './components/Header';


const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Container className="flex-container" >
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <div className="inner">
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
            </div>
            <Route path="*" >404</Route>
          </Switch>
        </Container>
      </Router>
    </GlobalProvider>
  )
}

export default App
