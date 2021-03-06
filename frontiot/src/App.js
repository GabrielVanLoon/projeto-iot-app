import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import './App.css'

import Header from './components/Header/Header' 
import DevicesPage from './components/DevicesPage/DevicesPage'
import HistoryPage from './components/HistoryPage/HistoryPage'
import LoginPage from './components/LoginPage/LoginPage'
import AboutPage from './components/AboutPage/AboutPage'
import { isAuthenticated } from "./services/auth"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>

            <Header/>
            <main>
              <Switch>
                <PrivateRoute path="/devices" component={DevicesPage}/>
                <PrivateRoute path="/devices-history" component={HistoryPage}/>
                <Route path="/about-the-project" component={AboutPage}/>
                <Route path="/" component={LoginPage} default/>
              </Switch>
            </main>

          </Router>
        </div>
    );
  }
}

export default App;