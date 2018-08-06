import React, { Component } from "react"
import Heading from "~/components/commons/Heading"
import { Transition, Container } from "semantic-ui-react"

import Education from "../../components/Education/Education"
import educationsData from "../../datas/educationsData"

import "./educations.styl"

class Educations extends Component {
  render() {
    // map on career datas and sended to the exp component
    const educations = educationsData.map(educations => (
      <Education
        key={educations.company}
        company={educations.company}
        spanTime={educations.spanTime}
        jobTitle={educations.jobTitle}
        inCharge={educations.inCharge}
      />
    ))

    return (
      <div className="educations">
        <Heading tag="h1" className="exp-h1">
          <Transition
            animation="fade left"
            transitionOnMount={true}
            duration={1000}
          >
            <div>Educations</div>
          </Transition>
        </Heading>
        <div> {educations} </div>
      </div>
    )
  }
}

export default Educations
