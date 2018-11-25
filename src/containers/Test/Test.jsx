import React, { Component } from "react"
import { Menu, Button, Container } from "semantic-ui-react"
import { isAuth } from "../../actions/actions"
import store from "../../store"

import "./test.styl"

export class Test extends Component {
  onClick = () => store.dispatch(isAuth())
  render() {
    return (
      <div className="test">
        <div className="test-row1">
          <Container className="test-container">
            <Button onClick={this.onClick}>CLick</Button>
          </Container>
        </div>
      </div>
    )
  }
}

export default Test
