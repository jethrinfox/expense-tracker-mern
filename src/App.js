import React, { useContext, useEffect } from 'react'
import { Switch } from "react-router-dom";
import { GlobalContext } from './context/GlobalState';

import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Header from './components/Header';
import AuthRoute from './components/AuthRoute';
import Loading from './components/Loading';


const App = () => {

  const { getUser, isLoggedIn, loading } = useContext(GlobalContext)

  useEffect(() => {
    if (!isLoggedIn) getUser()
    // eslint-disable-next-line
  }, [])


  return (
    <>

      {loading && <Loading />}

      <Header />
      <div className="centered" >
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
      </div>

    </>
  )
}

export default App
