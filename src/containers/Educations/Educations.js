import React, { Component } from "react"
import Heading from "~/components/commons/Heading"
import { Transition, Container } from "semantic-ui-react"
import styled, { cx, css } from "react-emotion"

import Experience from "../../components/Experience/Experience"
import educationsData from "../../datas/educationsData"

import "./educations.styl"

class Educations extends Component {
  render() {
    // map on career datas and sended to the exp component. setup even or odd for css
    // default increment values
    let spacing = 1
    let duration = 1500

    // generating Experience component with data and Css with Emotion
    const career = educationsData.map((experience, index) => {
      // increment duration animation timer for experiences boxes
      duration = duration + 500

      // default static styles for exp boxes even & odd
      let commonStyle = css({
        backgroundColor: "white",
        maxWidth: "400px",
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
      let triangleStyle
      let bulletStyle

      // colors
      let bulletColor = 'Green'
      let triangleColor = '#506874'


      if (index % 2 === 0) {
        // generate top & left placement for even boxes
        evenStyle = css({
          top: spacing,
          right: "auto",
          left: 0
        })
        // generate triangle style (position from the box)
        triangleStyle = css({
          borderStyle: "solid",
          borderWidth: "20px 20px 0 20px",
          borderColor: triangleColor + " transparent transparent transparent",
          content: '" "',
          position: "absolute",
          top: "0px",
          right: "-18px"
        })
        // generate bullets style & position (position from the box)
        bulletStyle = css({
          position: 'absolute',
          right: '-72px',
          top: '-3px',
          width: '12px',
          height: '12px',
          background: bulletColor,
          borderRadius: '70px',
          content: '" "',
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
        // generate triangle style (position from the box)
        triangleStyle = css({
          borderStyle: "solid",
          borderWidth: "20px 20px 0 20px",
          borderColor: triangleColor + " transparent transparent transparent",
          content: '" "',
          position: "absolute",
          top: "0px",
          left: "-18px"
        })
        // generate bullets style & position (position from the box)
        bulletStyle = css({
          position: 'absolute',
          left: '-70px',
          top: '-3px',
          width: '12px',
          height: '12px',
          background: bulletColor,
          borderRadius: '70px',
          content: '" "',
        })
        // combine default & odd styles
        myStyle = cx(commonStyle, oddStyle)
        // increment the boxes spacing
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
          triangleStyle={triangleStyle}
          bulletStyle={bulletStyle}
          duration={duration}
        />
      )
    }) // end career const

    return (
      <div className="experiences">
        <div className="experiences-row1">
          <Heading tag="h1" className="experiences-h1">
            <Transition
              animation="fade"
              transitionOnMount={true}
              duration={1000}
            >
              <div>Education</div>
            </Transition>
          </Heading>
        </div>
        <div className="experiences-wrapper">
          <span className="experiences-timeline"></span>
          {/* contains experience component */}
          {career}
        </div>
      </div>
    )
  }
}

export default Educations
