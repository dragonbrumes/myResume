import React, { Component } from "react"
import ReactGA from "react-ga"

import Home from "~/components/Home/Home"

import "./main.styl"

class Main extends Component {
  componentDidMount() {
    this.initializeReactGA()
  }
  // Google Analytics
  initializeReactGA = () => {
    ReactGA.initialize("UA-137090-6")
    ReactGA.pageview("/home")
  }

  render() {
    // console.log(process.env.AUTH0_DOMAIN)
    return <Home />
  }
}

export default Main
