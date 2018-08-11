import React from "react"
import { Grid, Container, Segment, Header, Transition } from "semantic-ui-react"
import Linkify from "react-linkify"
import styled from "react-emotion"

import "./experience.styl"

const Experiences = ({ company, spanTime, jobTitle, inCharge, myStyle }) => (
  <React.Fragment>
    {/* <div className="experiences">
      <div className="experiences-wrapper"> */}
    {/* <div className="experiences-box--odd">box 1</div>
        <div className="experiences-box--even">box 2</div> */}
    <div className={myStyle}>{company}</div>
    {/* <div className="experiences-box">{oddEven} box 2</div>
        <div className="experiences-box">{oddEven} box 3</div>
        <div className="experiences-box">{oddEven} box 4</div> */}
    {/* </div>
    </div> */}
  </React.Fragment>

  // <React.Fragment>
  //   <Container>
  //     <Transition
  //       animation="fade left"
  //       transitionOnMount={true}
  //       duration={1000}
  //     >
  //       <Grid columns="equal" className={oddEven} divided>
  //         <Grid.Row stretched centered>
  //           <Grid.Column>
  //             <Segment size="small" basic>
  //               <Header as="h3">{company}</Header>
  //               <br /> {spanTime}
  //             </Segment>
  //           </Grid.Column>
  //           <Grid.Column width={12}>
  //             <Segment basic>
  //               <Header as="h2">{jobTitle}</Header>
  //             </Segment>
  //             <Segment className="career-charge" basic>
  //               <Linkify properties={{ target: "_blank" }}>{inCharge}</Linkify>
  //             </Segment>
  //           </Grid.Column>
  //         </Grid.Row>
  //       </Grid>
  //     </Transition>
  //   </Container>
  // </React.Fragment>
)

export default Experiences
