import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import Header from "~/containers/Header/Header"
import Main from "~/containers/Main/Main"
import Experiences from "~/containers/Experiences/Experiences"
import Footer from "~/containers/Footer/Footer"

import AnimatedWrapper from "./AnimatedWrapper/AnimatedWrapper"

import "./app.styl"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={AnimatedWrapper(Main)} />
          <Route exact path="/experiences" component={Experiences} />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
