import React, { Component } from "react"
import Heading from "~/components/commons/Heading"
import { Transition, Container } from "semantic-ui-react"

import Experience from "../../components/Experience/Experience"
import careerData from "../../datas/careerData"

import "./experiences.styl"

class Experiences extends Component {
  render() {
    // map on career datas and sended to the exp component
    const career = careerData.map(experience => (
      <Experience
        key={experience.company}
        company={experience.company}
        spanTime={experience.spanTime}
        jobTitle={experience.jobTitle}
        inCharge={experience.inCharge}
      />
    ))

    return (
      <div className="career">
        <Heading tag="h1" className="exp-h1">
          <Transition
            animation="fade left"
            transitionOnMount={true}
            duration={1000}
          >
            <div>Career</div>
          </Transition>
        </Heading>
        <div> {career} </div>
      </div>
    )
  }
}

export default Experiences
