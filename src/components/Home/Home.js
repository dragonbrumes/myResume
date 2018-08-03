import React from "react"
import { Transition } from "semantic-ui-react"
import "./home.styl"
// import background from "../../assets/react-wallpapers.jpg"

const Home = () => (
  <Transition animation="fade left" transitionOnMount={true} duration={1000}>
    <div className="home-background">
      <div className="home-card">
        <div className="home-card-name">STEPHANE LANTERI</div>
        <div className="home-card-jobtitle">
          Web Dev <span className="home-card-r">R</span>EACTJS
        </div>
      </div>
    </div>
  </Transition>
)

export default Home
