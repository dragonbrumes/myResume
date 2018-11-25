import React, { Component } from "react"
import auth0Client from "../../auth/Auth"
import { Container, Header, Message, Icon, Form } from "semantic-ui-react"
import axios from "axios"

export class DelExpProccess extends Component {
  state = {}

  async componentDidMount() {
    const { id } = this.props.match.params
    console.log(this.props.match.params.id)
    console.log(id)
    const URI =
      process.env.NODE_ENV === "production"
        ? "https://cv.lanteri.fr"
        : "http://localhost:3000"
    await axios
      .delete(URI + `/admin/experiences/${id}`, {
        headers: { Authorization: `Bearer ${auth0Client.getIdToken()}` }
      })
      .then(res => {
        console.log(res)
        console.log(res.data)
        this.setState({ message: res.data.message })
      })
  }

  render() {
    let { message } = this.state
    return (
      <Container className="admin">
        <Header as="h1" className="admin-h1">
          Delete experiences
        </Header>
        <Message attached="bottom" warning>
          <Icon name="warning sign" />
          {message}
        </Message>
      </Container>
    )
  }
}

export default DelExpProccess
