import React from "react"
import { Grid, Container, Segment, Header, Transition } from "semantic-ui-react"

import "./experience.styl"

const Experiences = ({ company, spanTime, jobTitle, inCharge }) => (
  <React.Fragment>
    <Container>
      <Transition
        animation="browse right"
        transitionOnMount={true}
        duration={500}
      >
        <Grid columns="equal" className="career-column" divided>
          <Grid.Row stretched centered>
            <Grid.Column>
              <Segment size="small" basic>
                <Header as="h3">{company}</Header>
                <br /> {spanTime}
              </Segment>
            </Grid.Column>
            <Grid.Column width={12}>
              <Segment basic>
                <Header as="h2">{jobTitle}</Header>
              </Segment>
              <Segment className="career-charge" basic>
                {inCharge}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Transition>
    </Container>
  </React.Fragment>
)

export default Experiences
