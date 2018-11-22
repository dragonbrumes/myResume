import React, { Component, PureComponent } from "react"
import { Menu, Button } from "semantic-ui-react"
import { Link } from "react-router-dom"
import auth0Client from "../../auth/Auth"

import "./nav.styl"

class Nav extends Component {
  state = {
    logged: null,
    auth: false
  }

  // the state contain the active link
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    // allow signOut stuff
    const signOut = () => {
      auth0Client.signOut()
      props.history.replace("/")
    }
    // active menu item
    const { activeItem } = this.state

    return (
      <Menu text fixed="top" className="nav">
        {/* Menu.Item is transform in a react-router Link with the as parameter and understand the to property  */}
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={activeItem === "Home"}
          content="Home"
          onClick={this.handleItemClick}
          className="nav-link"
        />
        <Menu.Item
          as={Link}
          to="/career"
          name="Career"
          active={activeItem === "Career"}
          content="Career"
          onClick={this.handleItemClick}
          className="nav-link"
        />
        <Menu.Item
          as={Link}
          to="/educations"
          name="Educations"
          active={activeItem === "Educations"}
          content="Education"
          onClick={this.handleItemClick}
          className="nav-link"
        />
        <Menu.Item
          as={Link}
          to="/projects"
          name="Projects"
          active={activeItem === "Projects"}
          content="Projects"
          onClick={this.handleItemClick}
          className="nav-link"
        />

        {!auth0Client.isAuthenticated() && (
          <Menu.Item
            as={Link}
            to="/login"
            name="Login"
            active={activeItem === "Login"}
            content="Login"
            onClick={auth0Client.signIn}
            className="nav-link"
          />
        )}
        {/* <label className="nav-link">{auth0Client.getProfile().name}</label> */}
        {auth0Client.isAuthenticated() && (
          <React.Fragment>
            <Menu.Item
              as={Link}
              to="/admin/addexperience"
              name="AddExperience"
              active={activeItem === "AddExperience"}
              content="Add Experience"
              onClick={this.handleItemClick}
              className="nav-link"
            />
            {/* <Menu.Item name="signout" active={activeItem === "signout"} content="Sign Out" onClick={auth0Client.signOut} className="nav-link" /> */}
            <Button
              size="mini"
              color="red"
              onClick={auth0Client.signOut}
              className="nav-link"
            >
              Log Out
            </Button>
          </React.Fragment>
        )}
      </Menu>
    )
  }
}

export default Nav
