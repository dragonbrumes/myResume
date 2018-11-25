import React, { Component } from "react"
import { connect } from "react-redux"
// import { withRouter } from "react-router-dom"

import Nav from "../../components/Nav/Nav"

class Header extends Component {
  render() {
    console.log("Header. IsAuth: ", this.props.isAuth)
    return <Nav />
  }
}

const mapStateToProps = state => {
  const { isAuth } = state

  return { isAuth }
}

export default connect(
  mapStateToProps,
  null
)(Header)
