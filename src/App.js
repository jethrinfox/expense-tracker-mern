import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container/';
import { GlobalContext, GlobalProvider } from './context/GlobalState';
import './styles/styles.sass';

import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Header from './components/Header';


const App = () => {

  const { isLoggedIn } = useContext(GlobalContext)

  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Container className="flex-container" >
          <Switch>
            <Route path="/login" exact>
              {isLoggedIn && <Redirect to="/" />}
              <Login />
            </Route>
            <Route path="/signup" exact>
              {isLoggedIn && <Redirect to="/" />}
              <Signup />
            </Route>
            {!isLoggedIn && <Redirect to="/login" />}
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="*" >404</Route>
          </Switch>
        </Container>
      </Router>
    </GlobalProvider>
  )
}

export default App
