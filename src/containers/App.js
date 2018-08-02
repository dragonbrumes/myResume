import React, { Component } from "react"
import {
  Route,
  Switch,
} from "react-router-dom"

import Header from "~/containers/Header/Header"
import Main from "~/containers/Main/Main"
import Exp from "~/containers/Exp/Exp"
import Footer from "~/containers/Footer/Footer"

import "./app.styl"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/experiences" component={Exp} />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
