import React, { Component } from "react"

import Home from "~/components/Home/Home"

import "./main.styl"

class Main extends Component {
  render() {
    // console.log(process.env.AUTH0_DOMAIN)
    return <Home />
  }
}

export default Main
