import React, { Component } from "react"
import axios from "axios"

import Experience from "../../components/Experience/Experience"

export class Test extends Component {
  state = {
    experiences: []
  }
  componentDidMount() {
    axios
      // .get("https://backend.lanteri.fr/experiences")
      .get("http://localhost:3000/experiences")
      .then(response => {
        this.setState({ experiences: response.data.data })
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
  }

  experiences() {
    return this.state.experiences.map(experience => (
      <Experience
        key={experience.company}
        company={experience.company}
        logo={experience.logo}
        spanTime={experience.spanTime}
        jobTitle={experience.jobTitle}
        inCharge={experience.inCharge}
        increment={`experiences-box--${index + 1}`}
        myStyle={myStyle}
        triangleStyle={triangleStyle}
        bulletStyle={bulletStyle}
        duration={duration}
      />
    ))
  }
  render() {
    console.log(this.state.experiences)
    return <div className="home-card">{this.experiences()}</div>
  }
}

export default Test
