import React, { Component } from "react"
import Heading from "~/components/commons/Heading"
import { Transition, Container } from "semantic-ui-react"
import styled, { css } from "react-emotion"

import Experience from "../../components/Experience/Experience"
import careerData from "../../datas/careerData"

import "./experiences.styl"

class Experiences extends Component {
  render() {
    // map on career datas and sended to the exp component. setup even or odd for css

    let spacing = 1

    const career = careerData.map((experience, index) => {
      let myStyle
      if (index % 2 === 0) {
        myStyle = css({
          color: "rebeccapurple",
          border: "1px solid black",
          width: "300px",
          height: "150px",
          position: "absolute",
          top: spacing,
          left: 100,
          right: "auto"
        })
        console.log(myStyle)
      } else {
        myStyle = css({
          color: "rebeccapurple",
          border: "1px solid red",
          marginTop: "1em",
          width: "300px",
          height: "150px",
          position: "absolute",
          top: 20 + spacing,
          left: 420,
          right: "auto"
        })
        spacing = spacing + 155
        console.log(myStyle)
      }

      // const myStyle = styled("Experience")`
      //   color: rebeccapurple;
      // `
      return (
        <Experience
          key={experience.company}
          company={experience.company}
          spanTime={experience.spanTime}
          jobTitle={experience.jobTitle}
          inCharge={experience.inCharge}
          increment={`experiences-box--${index + 1}`}
          // className={myStyle}
          myStyle={myStyle}
          // oddEven={index % 2 === 0 ? "experiences-even" : "experiences-odd"}
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
            <div>Career</div>
          </Transition>
        </Heading>
        {/* Test new prez */}
        {/* <Experience oddEven /> */}
        <div className="experiences-wrapper"> {career} </div>
      </div>
    )
  }
}

export default Experiences
