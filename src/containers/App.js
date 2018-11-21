import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import {
  Header,
  Main,
  Experiences,
  Educations,
  Projects,
  Footer,
  Test,
  AddExperience
} from "./index"

import AnimatedWrapper from "./AnimatedWrapper/AnimatedWrapper"

import "./app.styl"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/career" component={Experiences} />
          <Route exact path="/educations" component={Educations} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/admin/addexperience" component={AddExperience} />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
