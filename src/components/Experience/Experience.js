import React from "react"
import { Grid, Container, Segment, Header, Transition } from "semantic-ui-react"
import Linkify from "react-linkify"
import styled from "react-emotion"
import Logo from "../../assets/index"
import * as logos from "../../assets/"

import "./experience.styl"

const Experiences = ({
  company,
  logo,
  spanTime,
  jobTitle,
  inCharge,
  myStyle,
  triangleStyle,
  bulletStyle,
  duration
}) => (
    <React.Fragment>
      <Transition animation="fade" transitionOnMount={true} duration={duration}>
        <div className={`experiences-card ${myStyle}`}>
          <span className={bulletStyle}></span>
          <span className={triangleStyle}></span>
          <div className="experiences-jobTitle">{jobTitle}</div>
          {/* <span className="experiences-bar">.</span> */}
          <div className="experiences-content">
            <div className="experiences-spanTime">{spanTime}</div>
            {/* <div className="experiences-company">{company}</div> */}
            <div className="experiences-logos">
              {/* combine logo name from datas & logos img from assets folder */}
              <img src={logos[logo]} className={`experiences-logo--${logo}`} />
            </div>
            {/* <div className="experiences-jobTitle">{jobTitle}</div> */}
            <div className="experiences-inCharge">
              <Linkify properties={{ target: "_blank" }}>{inCharge}</Linkify>
            </div>
          </div>
        </div>
      </Transition>
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
