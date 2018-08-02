import React, { Component } from "react"

import Heading from "~/components/commons/Heading"

import "./main.styl"

class Main extends Component {
  render() {
    return (
      <Heading tag="h1" className="main-h1">
        Main
      </Heading>
    )
  }
}

export default Main
