import React from "react";
import {Switch, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Header from "./components/Header";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import Map from "./pages/Map";
import PrivateRoute from "./PrivateRoute.js"
import {saveToken} from "./Redux/actions";

const App = () => {
  const dispatch = useDispatch()
  const token = useSelector(({saveToken}) => saveToken.token)
  if (!!token ) {
    dispatch(saveToken(token))
  } else {
    if (!!localStorage.getItem('token')) {
      dispatch(saveToken(localStorage.getItem('token')))
    } else return
  }

  return (
      <div className="App">
        <Header/>
        <section className="wrapper">
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/registration" component={Registration}/>
            <PrivateRoute path="/map" component={Map} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </section>
      </div>
  );
}

export default App;
