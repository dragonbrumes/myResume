import React, { Component } from "react";
import { FullPage, Slide } from "react-full-page";

import Header from "~/containers/Header/Header";
import Heading from "~/components/commons/Heading";
import "./app.styl";

class App extends Component {
  render() {
    const controlsProps = {
      style: {
        left: "50%",
        margin: "auto",
        paddingTop: "10px",
        position: "fixed",
        transform: "translateX(-50%)",
        backgroundColor: "white"
      }
    };

    return (
      <React.Fragment>
        {/* <FullPage controls={false} duration={1000}> */}
        <FullPage controls controlsProps={controlsProps} duration={1000}>
          {/* <Header /> */}
          <Slide className="slide1">
            <Heading tag="h1" className="slide1-h1">
              Front Web Dev
            </Heading>
          </Slide>
          <Slide className="slide2">
            <h1 id="dernieres-nouvelles">Another slide content</h1>
          </Slide>
        </FullPage>
      </React.Fragment>
    );
  }
}

export default App;
