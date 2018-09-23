import React from "react"
import { Transition, Button } from "semantic-ui-react"

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
          <p>In the digital world since 1999, I recently took the O'Clock (fr) training course on HTML, CSS, PHP, JAVASCRIPT and REACJS. I am looking for a structure that can support me in the implementation of these skills that I would put at its service. For information, I just arrived in Malta from France</p>
          <div className="home-buttons">
            <Button color='green'>Download CV</Button>
            <Button color='green'>Contact me</Button></div>
        </div>
      </div>


    </div>
  </Transition>
)

export default Home
