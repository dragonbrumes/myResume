import React, { Component } from "react"
import { Route, Switch, withRouter } from "react-router-dom"

import {
  Header,
  Main,
  Experiences,
  Educations,
  Projects,
  Footer,
  Login,
  AddExperience,
  Callback,
  Home
} from "./index"
import SecuredRoute from "../auth/SecuredRoute"
import Auth from "../auth/Auth"
// import AnimatedWrapper from "./AnimatedWrapper/AnimatedWrapper"

import "./app.styl"

class App extends Component {
  state = {
    checkingSession: true
  }
  //check for silent auth. Use for auth still on reloading
  async componentDidMount() {
    // console.log(this.props.location.pathname)
    // for securedRoutes
    // if (this.props.location.pathname === "/callback") {
    //   this.setState({ checkingSession: false })
    //   return
    // }
    // silent auth
    if (this.props.location.pathname === "/callback") return
    try {
      await auth0Client.silentAuth()
      this.forceUpdate()
    } catch (err) {
      if (err.error === "login_required") return
      console.log(err.error)
    }
    // belong to secureRoutes
    // this.setState({ checkingSession: false })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/home" component={Main} />
          <Route exact path="/career" component={Experiences} />
          <Route exact path="/educations" component={Educations} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin/addexperience" component={AddExperience} />
          {/* <SecuredRoute
            path="/admin/addexperience"
            component={AddExperience}
            checkingSession={this.state.checkingSession}
          /> */}
          <Route exact path="/callback" component={Callback} />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(App)
