import React, { Component } from "react"
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"

import "./nav.styl"

class Nav extends Component {
  state = {}

  // the state contain the active link
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return <Menu text fixed="top" className="nav">
        {/* Menu.Item is transform in a react-router Link with the as parameter and understand the to property  */}
        <Menu.Item as={Link} to="/" name="Home" active={activeItem === "Home"} content="Home" onClick={this.handleItemClick} className="nav-link" />
        <Menu.Item as={Link} to="/career" name="Career" active={activeItem === "career"} content="Career" onClick={this.handleItemClick} className="nav-link" />
        <Menu.Item as={Link} to="/educations" name="Educations" active={activeItem === "Educations"} content="Educations" onClick={this.handleItemClick} className="nav-link" />
      </Menu>
  }
}

export default Nav

// const Nav = () => (

//   <Navbar fixed="top" className="nav">
//     {/* <Navbar.Brand>Stéphan L.</Navbar.Brand> */}
//     <Navbar.Item className="nav-link" href="#" active={true}>
//       home
//     </Navbar.Item>
//     <Navbar.Item className="nav-link">experiences</Navbar.Item>
//     <Navbar.Item className="nav-link">skills</Navbar.Item>
//     <Navbar.Item className="nav-link">contact</Navbar.Item>
//   </Navbar>
// );

//export default Nav;
