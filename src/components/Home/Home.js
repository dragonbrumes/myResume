import React from "react"
import { Transition, Button, Icon } from "semantic-ui-react"

import cv from "../../assets/stephane_lanteri-cv.pdf"

import "./home.styl"

const Home = () => (
  <Transition animation="fade" transitionOnMount={true} duration={1000}>
    <div className="home-card">
      <div className="home-row1">
        <div className="home-row1--name">Stéphane Lanteri</div>
        <div className="home-row1--jobProfil">Web developer ReactJs</div>
      </div>
      <div className="home-picture"></div>
      <div className="home-row2">
        <div className="home-row2--textIntro">
          <p className="home-row2--textIntro--p">In the digital world since 1999, I used to be a web project manager. I recently wanted to change ma career and took the <a href="https://oclock.io/" download>O'Clock</a> (fr) training course on HTML, CSS, PHP, JAVASCRIPT and REACJS. I am looking for a structure that can support me in the implementation of these skills that I would put at its service. For information, I just arrived in Malta from France</p>
          <div className="home-buttons">
            <Button as="href" color='green'><a href={cv} download>Download CV</a></Button>
            <Button as="href" color='green'><a href="mailto:stephane@lanteri.fr">Contact me</a></Button></div>

        </div>
        {/* <div>
          <Button as="href" color='green' animated='vertical'>
            <Button.Content visible>Download CV</Button.Content>
            <a href={cv} download><Button.Content hidden><Icon name='arrow alternate circle down' size='large' color='yellow' /></Button.Content></a>
          </Button>
        </div> */}
      </div>


    </div>
  </Transition >
)

export default Home
