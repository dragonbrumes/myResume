import React, { Component } from "react"
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { Icon, Label } from 'semantic-ui-react'

import Heading from '~/components/commons/Heading'

import "./footer.styl"

class Footer extends Component {
  state = {}

  // the state contain the active link
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className="footer">
      <Heading tag="h2" className="footer-h1">Contact</Heading>
      <div>
            <Label as={Link} to="mailto:stephane@lanteri.fr">
      <Icon name='mail' />
      stephane@lanteri.fr
    </Label>
         </div>
      <div>
            <Label as={Link} to="https://www.linkedin.com/in/stephane-lanteri/" target="_blank">
      <Icon name='linkedin' />
      https://www.linkedin.com/in/stephane-lanteri/
    </Label>
         </div>
      </div>
    )
  }
}

export default Footer

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
