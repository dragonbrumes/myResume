import React, { Component } from "react"
import axios from "axios"
import { Container, Header, Message, Icon, Form } from "semantic-ui-react"
import auth0Client from "../../auth/Auth"

import "./admin.styl"

export class AddExperience extends Component {
  state = {
    token: "",
    company: "",
    logo: "",
    spanTime: "",
    jobTitle: "",
    inCharge: "",
    order: "",
    message: undefined,
    inserted: undefined
  }
  componentDidMount = () => {
    const token = auth0Client.getIdToken()
    this.setState({ token })
    // console.log(token)
  }

  // store in state
  handleChange = (e, { name, value }) =>
    this.setState({
      [name]: value
    })

  // send to back end via axios
  handleSubmit = event => {
    event.preventDefault()
    const { company, logo, spanTime, jobTitle, inCharge, order } = this.state
    // console.log(company, logo, spanTime, jobTitle, inCharge, order)
    // défine axios URI
    const URI =
      process.env.NODE_ENV === "production"
        ? "https://backend.lanteri.fr"
        : "http://localhost:3000"

    console.log("backend: ", URI)

    axios
      .post(
        URI + "/admin/experiences",
        { company, logo, spanTime, jobTitle, inCharge, order },
        { headers: { Authorization: `Bearer ${auth0Client.getIdToken()}` } }
      )
      .then(response => {
        // console.log(response.data)
        // console.log(response.data.errors)
        // console.log(response.data.message)
        // store the return message
        this.setState({
          message: response.data.message,
          inserted: response.data.insert,
          company: "",
          logo: "",
          spanTime: "",
          jobTitle: "",
          inCharge: "",
          order: ""
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    const {
      company,
      logo,
      spanTime,
      jobTitle,
      inCharge,
      order,
      inserted
    } = this.state
    let { message } = this.state
    // split the messages if many
    if (message != undefined) {
      message = message.split(",").map((item, i) => {
        return <p key={i}>{item}</p>
      })
    }
    return (
      <Container className="admin">
        <Header as="h1" className="admin-h1">
          Add experiences
        </Header>
        <Form className="admin-form" onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              name="company"
              label="company"
              placeholder="company"
              onChange={this.handleChange}
              value={company}
            />
            <Form.Input
              name="logo"
              label="logo"
              placeholder="logo name"
              onChange={this.handleChange}
              value={logo}
            />
            <Form.Input
              name="spanTime"
              label="spanTime"
              placeholder="11/2016 to 02/2017"
              onChange={this.handleChange}
              value={spanTime}
            />
            <Form.Input
              name="jobTitle"
              label="jobTitle"
              placeholder="jobTitle"
              onChange={this.handleChange}
              value={jobTitle}
            />
          </Form.Group>
          <Form.TextArea
            name="inCharge"
            label="inCharge"
            placeholder="inCharge of..."
            onChange={this.handleChange}
            value={inCharge}
          />
          <Form.Input
            name="order"
            label="Order"
            placeholder="Order of appearance"
            onChange={this.handleChange}
            value={order}
          />
          <Form.Button content="Submit" />
        </Form>
        {inserted === undefined && message && (
          <Message attached="bottom" warning>
            <Icon name="warning sign" />
            {message}
          </Message>
        )}
        {inserted === "ok" && (
          <Message attached="bottom" success>
            <Icon name="info" />
            {message}
          </Message>
        )}
      </Container>
    )
  }
}

export default AddExperience
