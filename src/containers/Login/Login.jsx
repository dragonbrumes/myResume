import React from "react"
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react"

import "./login.styl"

class Login extends React.Component {
  render() {
    return (
      <Segment className="login">
        <Dimmer active>
          <Loader size="massive">Loading</Loader>
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    )
  }
}

export default Login
