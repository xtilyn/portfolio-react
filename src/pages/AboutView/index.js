import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import SimpleHeader from "../../components/SimpleHeader";
import androidPhone from "../../images/phone_android.png";
import { Typography } from "@material-ui/core";
import ReactDOM from "react-dom";

const rootStyle = {
  width: "100%",
  height: "100%"
};

const aboutContainer = {
  borderRadius: "32px",
  background: "#3d3d3d",
  boxShadow: "0px 3px 99px rgba(0, 0, 0, 0.16)"
};

const dot = {
  height: "22px",
  width: "22px",
  borderRadius: "50%"
};

const linesContainer = {
  borderRadius: "0px 0px 0px 31px",
  background: "#373737"
};

class AboutView extends Component {

  #isMouseDownOnConsole;

  constructor(props) {
    super(props);
    this.#isMouseDownOnConsole = false;

    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      aboutTextHeight: 0,
      consoleX: 0,
      consoleY: 0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  handleEvent = event => {
    console.log(`${event.screenX}, ${event.screenY}`);
    if (event.type === "mousedown") {
      console.log("Mouse Down");
      this.#isMouseDownOnConsole = true;
      this.setState({
        initialMouseX: event.screenX,
        initialMouseY: event.screenY
      });

    } else if (event.type === "mouseup") {
      console.log("Mouse Up");
      this.#isMouseDownOnConsole = false;
      this.setState({
        initialMouseX: 0,
        initialMouseY: 0
      });

    } else {
      console.log("Dragging");
      if (this.#isMouseDownOnConsole) {

        const consoleDOM = ReactDOM.findDOMNode(this.refs["console"]);
        console.log(consoleDOM.getBoundingClientRect().x);
        const { initialMouseX, initialMouseY } = this.state;
        // this.setState({
        //   consoleX: // TODO CONTINUE HERE calculate values for consoleX and consoleY
        // });
      }
    }
  };

  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });

    const node = ReactDOM.findDOMNode(this.refs["aboutText"]);
    if (node) {
      const calculatedHeight = node.clientHeight;
      this.setState({
        aboutTextHeight: calculatedHeight
      });
    }

    const consoleDOM = ReactDOM.findDOMNode(this.refs["console"]);
    if (consoleDOM) {
      this.setState({
        consoleX: consoleDOM.getBoundingClientRect().x,
        consoleY: consoleDOM.getBoundingClientRect().y
      });
    }
  };

  renderLineNumbers = () => {
    const { aboutTextHeight } = this.state;
    let list = [];
    for (var i = 1; i <= Math.floor(aboutTextHeight / 28); i++) {
      list.push(
        <div>
          {i}
          <br></br>
        </div>
      );
    }
    return list;
  };

  render() {
    const { windowWidth, windowHeight } = this.state;
    const aboutContainerWidth = (windowWidth / 2) * 0.69;
    const aboutContainerHeight = (windowHeight / 2) * 1.3;
    const linesContainerWidth =
      aboutContainerWidth * 0.1 > 50 ? 50 : aboutContainerWidth * 0.1;

    return (
      <Column flexGrow={1} style={rootStyle}>
        <Row>
          <SimpleHeader title="About" />
        </Row>
        <Row flex={1}>
          <Column flex={1} justifyContent="center" alignItems="center">
            <Column
            ref="console"
              style={{
                ...aboutContainer,
                width: "60%",
                marginLeft: 50,
                marginRight: 50,
                marginBottom: 60,
                // TODO CONTINUE HERE SET x and y properties to use consoleX and consoleY in State
              }}
            >
              <Row
                justifyContent="end"
                style={{ marginTop: 20, marginRight: 20, cursor: "pointer" }}
                onMouseDown={this.handleEvent}
                onMouseUp={this.handleEvent}
                onMouseMove={this.handleEvent}
              >
                <div
                  style={{ ...dot, background: "#A5FFA8", marginRight: 8 }}
                />
                <div
                  style={{ ...dot, background: "#FCF996", marginRight: 8 }}
                />
                <div style={{ ...dot, background: "#FF6767" }} />
              </Row>
              <Row flex={1}>
                <Column
                  style={{
                    ...linesContainer,
                    marginTop: 30,
                    width: linesContainerWidth,
                    overflow: "hidden"
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: "center", overflow: "hidden" }}
                  >
                    {this.renderLineNumbers()}
                  </Typography>
                </Column>
                <Column flex={1} style={{ marginTop: 30 }}>
                  <Typography
                    ref="aboutText"
                    variant="subtitle1"
                    style={{
                      textAlign: "start",
                      marginLeft: 10,
                      marginRight: 10,
                      overflow: "hidden",
                      marginBottom: 20
                    }}
                  >
                    Primarily connected with native android app development
                    using Kotlin and Firebase with experience in full stack web
                    development using React, Node, and Mongo. <br></br>
                    <br></br>Interested in the mobile development world and have
                    played with various cross-platform technologies such as
                    Flutter, Xamarin, and React Native. <br></br>
                    <br></br>Love to work on ambitious projects, learn new
                    technologies, and design mobile systems.
                  </Typography>
                </Column>
              </Row>
            </Column>
          </Column>

          <Column flex={1}>
            <img src={androidPhone} style={{ width: 500 }} alt="" />
          </Column>
        </Row>
      </Column>
    );
  }
}

export default AboutView;
