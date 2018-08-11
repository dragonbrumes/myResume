import React, { Component } from "react"
import Heading from "~/components/commons/Heading"
import { Transition, Container } from "semantic-ui-react"
import styled, { cx, css } from "react-emotion"

import Experience from "../../components/Experience/Experience"
import careerData from "../../datas/careerData"

import "./experiences.styl"

class Experiences extends Component {
  render() {
    // map on career datas and sended to the exp component. setup even or odd for css
    // default increment values
    let spacing = 1
    let duration = 1500

    // generating Experience component with data
    const career = careerData.map((experience, index) => {
      // increment duration animation timer for experiences boxes
      duration = duration + 500

      // default static styles for exp boxes even & odd
      let commonStyle = css({
        // color: "white",
        padding: "1em",
        backgroundColor: "white",
        border: "1px solid #757575",
        width: "400px",
        height: "250px",
        position: "absolute",
        top: spacing,
        boxShadow: "0px 4px 7px 1px rgba(117,117,117,1)"
      })
      // right: "auto"
      // declaration of vars
      let evenStyle
      let oddStyle
      let myStyle

      if (index % 2 === 0) {
        // generate top & left placement for even boxes
        evenStyle = css({
          top: spacing,
          right: "auto",
          left: 0
        })
        // combine default & even styles
        myStyle = cx(commonStyle, evenStyle)
      } else {
        // generate top & left placement for odd boxes
        oddStyle = css({
          top: 50 + spacing,
          right: 0,
          left: "auto"
        })
        // combine default & odd styles
        myStyle = cx(commonStyle, oddStyle)
        // increment the spacing
        spacing = spacing + 260
      }

      return (
        <Experience
          key={experience.company}
          company={experience.company}
          logo={experience.logo}
          spanTime={experience.spanTime}
          jobTitle={experience.jobTitle}
          inCharge={experience.inCharge}
          increment={`experiences-box--${index + 1}`}
          myStyle={myStyle}
          duration={duration}
        />
      )
    })

    return (
      <div className="experiences">
        <Heading tag="h1" className="exp-h1">
          <Transition
            animation="fade left"
            transitionOnMount={true}
            duration={1000}
          >
            <div>Work Experience</div>
          </Transition>
        </Heading>
        {/* Test new prez */}
        {/* <Experience oddEven /> */}
        <div className="experiences-wrapper">
          <span className="experiences-timeline">.</span>
          {career}
        </div>
      </div>
    )
  }
}

export default Experiences
