import React from 'react'
import { HashRouter, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container/';
import { GlobalProvider } from './context/GlobalState';
import './styles/styles.sass';

import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Header from './components/Header';
import AuthRoute from './components/AuthRoute';


const App = () => {

  return (
    <GlobalProvider>
      <HashRouter basename="/expense-tracker-mern">
        <Header />
        <Container className="flex-container" >
          <Switch>

            <AuthRoute path="/login" type="guest" >
              <Login />
            </AuthRoute>

            <AuthRoute path="/signup" type="guest">
              <Signup />
            </AuthRoute>

            <AuthRoute path="/" exact type="private">
              <Main />
            </AuthRoute>

            <AuthRoute path="*" >
              404
            </AuthRoute>

          </Switch>
        </Container>
      </HashRouter>
    </GlobalProvider>
  )
}

export default App
