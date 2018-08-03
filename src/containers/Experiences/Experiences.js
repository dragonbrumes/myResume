import React, { Component } from "react"
import Heading from "~/components/commons/Heading"
import _ from "lodash"
import { Transition } from "semantic-ui-react"

import Experience from "../../components/Experience/Experience"
import careerData from "../../datas/careerData"

import "./experiences.styl"

class Experiences extends Component {
  render() {
    const career = careerData.map(experience => (
      // <div key={experience.company}>{experience.company}</div>
      <Experience
        key={experience.company}
        company={experience.company}
        spanTime={experience.spanTime}
        jobTitle={experience.jobTitle}
        inCharge={experience.inCharge}
      />
    ))
    // const exp = _.map(experiencesData, (value, key) => (
    //   <div key={key}>{value[key]}</div>
    // ))

    return (
      <React.Fragment>
        <Transition
          animation="browse right"
          transitionOnMount={true}
          duration={1500}
        >
          <Heading tag="h1" className="exp-h1">
            Career
          </Heading>
        </Transition>
        {career}
      </React.Fragment>
    )
  }
}

export default Experiences
