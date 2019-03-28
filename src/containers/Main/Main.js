import React, { Component } from "react"
import ReactGA from "react-ga"
import { Helmet } from "react-helmet"

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
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Stephane Lanteri - Reactjs front-end web developer</title>
          <meta name="description" content="Stephane Lanteri - online CV" />
          <link rel="canonical" href="https://stephane.lanteri.fr/" />
        </Helmet>
        <Home />
      </div>
    )
  }
}

export default Main
