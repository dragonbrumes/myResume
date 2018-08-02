import React, { Component } from "react";
import { Navbar } from "react-bulma-components";
import { Menu } from "semantic-ui-react";

import "./nav.styl";

export default class Nav extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu text fixed="top" className="nav">
        <Menu.Item
          name="editorials"
          active={activeItem === "editorials"}
          content="Editorials"
          onClick={this.handleItemClick}
          className="nav-link"
        />

        <Menu.Item
          name="reviews"
          active={activeItem === "reviews"}
          content="Reviews"
          onClick={this.handleItemClick}
          className="nav-link"
        />

        <Menu.Item
          name="upcomingEvents"
          active={activeItem === "upcomingEvents"}
          content="Upcoming Events"
          onClick={this.handleItemClick}
          className="nav-link"
        />
      </Menu>
    );
  }
}

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
