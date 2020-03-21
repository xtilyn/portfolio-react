import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import SimpleHeader from "../../components/SimpleHeader";
import androidPhone from "../../images/phone_android.png";
import mongoIcon from "../../images/mongo_icon.png";
import nodeIcon from "../../images/node_icon.png";
import reduxIcon from "../../images/redux_icon.png";
import xdIcon from "../../images/xd_icon.png";
import flutterIcon from "../../images/flutter_icon.png";
import firebaseIcon from "../../images/firebase_icon.png";
import reactIcon from "../../images/react_icon.png";
import { Typography, Fade, Grow } from "@material-ui/core";
import ReactDOM from "react-dom";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import RoomIcon from "@material-ui/icons/Room";
import Draggable from "react-draggable";

const rootStyle = {
  width: "100%",
  height: "100%"
};

const aboutContainer = {
  borderRadius: "32px",
  background: "#3d3d3d",
  boxShadow: "0px 3px 99px rgba(0, 0, 0, 0.16)"
};

const tile = {
  background: "#5e5e5e",
  borderRadius: "14px"
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
  #defaultAnimTimeout;

  constructor(props) {
    super(props);
    this.#isMouseDownOnConsole = false;
    this.#defaultAnimTimeout = 500;

    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      aboutTextHeight: 0,
      consoleX: 0,
      consoleY: 0,
      reactIconX: 0,
      reactIconY: 0,
      animateNodeIcon: false,
      animateReduxIcon: false,
      animateFlutterIcon: false,
      animateXdIcon: false,
      animateFirebaseIcon: false,
      animateReactIcon: false
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    const nodeIconTimeout = this.#defaultAnimTimeout - 300;
    setTimeout(() => {
      this.setState({
        animateNodeIcon: true
      });
    }, nodeIconTimeout);

    const reduxIconTimeout = nodeIconTimeout + 50;
    setTimeout(() => {
      this.setState({
        animateReduxIcon: true
      });
    }, reduxIconTimeout);

    const flutterIconTimeout = reduxIconTimeout + 50;
    setTimeout(() => {
      this.setState({
        animateFlutterIcon: true
      });
    }, flutterIconTimeout);

    const xdIconTimeout = flutterIconTimeout + 50;
    setTimeout(() => {
      this.setState({
        animateXdIcon: true
      });
    }, xdIconTimeout);

    const firebaseIconTimeout = xdIconTimeout + 50;
    setTimeout(() => {
      this.setState({
        animateFirebaseIcon: true
      });
    }, firebaseIconTimeout);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  handleEvent = event => {
    // console.log(`${event.screenX}, ${event.screenY}`);
    // if (event.type === "mousedown") {
    //   console.log("Mouse Down");
    //   this.#isMouseDownOnConsole = true;
    //   this.setState({
    //     initialMouseX: event.screenX,
    //     initialMouseY: event.screenY
    //   });
    // } else if (event.type === "mouseup") {
    //   console.log("Mouse Up");
    //   this.#isMouseDownOnConsole = false;
    //   this.setState({
    //     initialMouseX: 0,
    //     initialMouseY: 0
    //   });
    // } else {
    //   console.log("Dragging");
    //   if (this.#isMouseDownOnConsole) {
    //   }
    // }
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

    const firebaseIconDOM = ReactDOM.findDOMNode(this.refs["firebaseIcon"]);
    const x = firebaseIconDOM.getBoundingClientRect().x;
    const y = firebaseIconDOM.getBoundingClientRect().y;
    const width = firebaseIconDOM.getBoundingClientRect().width;
    const height = firebaseIconDOM.getBoundingClientRect().height;
    this.setState({
      reactIconX: x + width / 2 + 10,
      reactIconY: y + height + 10
    });
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
    const {
      windowWidth,
      windowHeight,
      reactIconX,
      reactIconY,
      animateNodeIcon,
      animateReduxIcon,
      animateFlutterIcon,
      animateXdIcon
    } = this.state;
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
          <Fade in={true} timeout={1000}>
            <Column flex={1} justifyContent="center" alignItems="center">
              <Draggable handle=".handle" bounds="body">
                <Column
                  ref="console"
                  style={{
                    ...aboutContainer,
                    width: "60%",
                    marginLeft: 50,
                    marginRight: 50,
                    marginBottom: 60,
                    zIndex: 5
                  }}
                  className="box"
                >
                  <Row
                    justifyContent="end"
                    style={{
                      marginTop: 20,
                      marginRight: 20,
                      cursor: "pointer"
                    }}
                    onMouseDown={this.handleEvent}
                    onMouseUp={this.handleEvent}
                    onMouseMove={this.handleEvent}
                    className="handle"
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
                        using Kotlin/Java and Firebase with experience in full
                        stack web development using React, Node, and Mongo.{" "}
                        <br></br>
                        <br></br>Interested in the mobile development world and
                        have played with various cross-platform technologies
                        such as Flutter, Xamarin, and React Native. <br></br>
                        <br></br>Love to work on ambitious projects, learn new
                        technologies, and design mobile systems.
                      </Typography>
                    </Column>
                  </Row>
                </Column>
              </Draggable>
            </Column>
          </Fade>

          <Row flex={1} justifyContent="center" alignItems="center">
            <Column alignItems="start" style={{ height: "100%" }}>
              <Flippy>
                <FrontSide
                  style={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    marginTop: 80
                  }}
                >
                  <img
                    src={firebaseIcon}
                    ref="firebaseIcon"
                    className="techTile"
                    style={{
                      width: 131,
                      height: 126,
                      cursor: "pointer"
                    }}
                    alt=""
                  />
                </FrontSide>

                <BackSide
                  style={{
                    backgroundColor: "transparent",
                    boxShadow: "none"
                  }}
                >
                  <Column
                    className="techTile"
                    style={{
                      ...tile,
                      width: 131,
                      height: 126,
                      cursor: "pointer"
                    }}
                    justifyContent="center"
                  >
                    <Typography
                      variant="body1"
                      style={{ fontFamily: "Consolas" }}
                    >
                      Firebase
                    </Typography>
                  </Column>
                </BackSide>
              </Flippy>
            </Column>
            <Flippy
              style={{
                position: "absolute",
                top: reactIconY,
                left: reactIconX,
                marginTop: 10
              }}
            >
              <FrontSide
                style={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  padding: 0
                }}
              >
                <img
                  src={reactIcon}
                  ref="reactIcon"
                  style={{
                    width: 149,
                    height: 132,
                    cursor: "pointer"
                  }}
                  alt=""
                  className="techTile"
                />
              </FrontSide>

              <BackSide
                style={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  padding: 0
                }}
              >
                <Column
                  className="techTile"
                  style={{
                    ...tile,
                    width: 149,
                    height: 132,
                    cursor: "pointer"
                  }}
                  justifyContent="center"
                >
                  <Typography
                    variant="body1"
                    style={{
                      fontFamily: "Consolas",
                      textAlign: "center"
                    }}
                  >
                    ReactJS / <br></br>React Native
                  </Typography>
                </Column>
              </BackSide>
            </Flippy>
            <Column
              style={{
                marginBottom: 60
              }}
            >
              <img
                src={androidPhone}
                style={{
                  width: 321,
                  height: 521,
                  marginBottom: 10,
                  marginRight: 14
                }}
                alt=""
              />
              <Typography
                variant="body1"
                style={{
                  color: "#BBBBBB",
                  fontSize: 20,
                  fontFamily: "Segoe UI",
                  textAlign: "center"
                }}
              >
                <RoomIcon />
                Alberta, Canada
              </Typography>
            </Column>
            <Column
              justifyContent="center"
              alignItems="center"
              style={{ marginBottom: 50 }}
            >
              <Grow
                in
                timeout={this.#defaultAnimTimeout}
                style={{ transformOrigin: "0 0 0" }}
                unmountOnExit
              >
                <Flippy
                  style={{
                    marginBottom: 10,
                    width: 141,
                    height: 122
                  }}
                >
                  <FrontSide
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      padding: 0
                    }}
                  >
                    <img
                      src={mongoIcon}
                      style={{
                        width: 141,
                        height: 122,
                        cursor: "pointer"
                      }}
                      alt=""
                      className="techTile"
                    />
                  </FrontSide>

                  <BackSide
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      padding: 0
                    }}
                  >
                    <Column
                      className="techTile"
                      style={{
                        ...tile,
                        width: 141,
                        height: 122,
                        cursor: "pointer"
                      }}
                      justifyContent="center"
                    >
                      <Typography
                        variant="body1"
                        style={{
                          fontFamily: "Consolas",
                          textAlign: "center"
                        }}
                      >
                        MongoDB
                      </Typography>
                    </Column>
                  </BackSide>
                </Flippy>
              </Grow>
              <Grow
                in={animateNodeIcon}
                timeout={this.#defaultAnimTimeout}
                style={{ transformOrigin: "0 0 0" }}
              >
                <Flippy
                  style={{
                    marginBottom: 10,
                    width: 152,
                    height: 122
                  }}
                >
                  <FrontSide
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      padding: 0
                    }}
                  >
                    <img
                      src={nodeIcon}
                      style={{
                        width: 152,
                        height: 122,
                        cursor: "pointer"
                      }}
                      alt=""
                      className="techTile"
                    />
                  </FrontSide>

                  <BackSide
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      padding: 0
                    }}
                  >
                    <Column
                      className="techTile"
                      style={{
                        ...tile,
                        width: 152,
                        height: 122,
                        cursor: "pointer"
                      }}
                      justifyContent="center"
                    >
                      <Typography
                        variant="body1"
                        style={{
                          fontFamily: "Consolas",
                          textAlign: "center"
                        }}
                      >
                        NodeJS
                      </Typography>
                    </Column>
                  </BackSide>
                </Flippy>
              </Grow>
              <Grow
                in={animateReduxIcon}
                timeout={this.#defaultAnimTimeout}
                style={{ transformOrigin: "0 0 0" }}
              >
                <Flippy
                  style={{
                    width: 121,
                    height: 116,
                    marginBottom: 10
                  }}
                >
                  <FrontSide
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      padding: 0
                    }}
                  >
                    <img
                      src={reduxIcon}
                      style={{ width: 121, height: 116, cursor: "pointer" }}
                      alt=""
                      className="techTile"
                    />
                  </FrontSide>

                  <BackSide
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      padding: 0
                    }}
                  >
                    <Column
                      className="techTile"
                      style={{
                        ...tile,
                        width: 121,
                        height: 116,
                        cursor: "pointer"
                      }}
                      justifyContent="center"
                    >
                      <Typography
                        variant="body1"
                        style={{
                          fontFamily: "Consolas",
                          textAlign: "center"
                        }}
                      >
                        Redux
                      </Typography>
                    </Column>
                  </BackSide>
                </Flippy>
              </Grow>
              <Grow
                in={animateFlutterIcon}
                timeout={this.#defaultAnimTimeout}
                style={{ transformOrigin: "0 0 0" }}
              >
                <Flippy
                  style={{
                    width: 134,
                    height: 125,
                    marginBottom: 10
                  }}
                >
                  <FrontSide
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      padding: 0
                    }}
                  >
                    <img
                      src={flutterIcon}
                      style={{ width: 134, height: 125, cursor: "pointer" }}
                      alt=""
                    />
                  </FrontSide>

                  <BackSide
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      padding: 0
                    }}
                  >
                    <Column
                      className="techTile"
                      style={{
                        ...tile,
                        width: 134,
                        height: 125,
                        cursor: "pointer"
                      }}
                      justifyContent="center"
                    >
                      <Typography
                        variant="body1"
                        style={{
                          fontFamily: "Consolas",
                          textAlign: "center"
                        }}
                      >
                        Flutter
                      </Typography>
                    </Column>
                  </BackSide>
                </Flippy>
              </Grow>
              <Grow
                in={animateXdIcon}
                timeout={this.#defaultAnimTimeout}
                style={{ transformOrigin: "0 0 0" }}
              >
                <Flippy
                  style={{
                    width: 121,
                    height: 116
                  }}
                >
                  <FrontSide
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      padding: 0
                    }}
                  >
                    <img
                      src={xdIcon}
                      style={{ width: 121, height: 116, cursor: "pointer" }}
                      alt=""
                      className="techTile"
                    />
                  </FrontSide>

                  <BackSide
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      padding: 0
                    }}
                  >
                    <Column
                      className="techTile"
                      style={{
                        ...tile,
                        width: 121,
                        height: 116,
                        cursor: "pointer"
                      }}
                      justifyContent="center"
                    >
                      <Typography
                        variant="body1"
                        style={{
                          fontFamily: "Consolas",
                          textAlign: "center"
                        }}
                      >
                        Adobe XD
                      </Typography>
                    </Column>
                  </BackSide>
                </Flippy>
              </Grow>
            </Column>
          </Row>
        </Row>
      </Column>
    );
  }
}

export default AboutView;
