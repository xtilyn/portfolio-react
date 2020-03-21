import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import { colorPrimary } from "../../constants/app_colors";
import ProfileSnippet from "../../components/ProfileSnippet";
import ExampleComponent from "react-rounded-image";
import MyPhoto from "../../images/logo.png";
import Header from "../../components/Header";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
import { profileSnippetAnimDuration } from "../../constants/shared_variables";
import PrimaryActionButton from "../../components/buttons/PrimaryActionButton";
import SendIcon from "@material-ui/icons/Send";
import {
  SwipeableDrawer,
  IconButton,
  Typography,
  TextField,
  InputBase,
  Icon,
  Button
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { colorAccent } from "../../constants/app_colors";

const rootStyle = {
  background: colorPrimary,
  width: "100%",
  height: "100%"
};

const borderStyle = {
  width: "20%",
  height: "10px",
  background: colorAccent,
  marginLeft: 70,
  marginTop: 10
};

const textFieldStyle = {
  borderRadius: "12px",
  background: "#5e5e5e",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  color: "#fff",
  flex: 1
};

class index extends Component {
  #imagePercentWidth;
  #imagePercentHeight;

  constructor(props) {
    super(props);
    this.#imagePercentWidth = 642 / 1920;
    this.#imagePercentHeight = 662 / 1080;

    this.state = {
      isMounted: false,
      windowWidth: 0,
      windowHeight: 0,
      drawerOpen: false
    };
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    });
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  toggleNavDrawer = () => {
    const { drawerOpen } = this.state;
    this.setState({
      drawerOpen: !drawerOpen
    });
  };

  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  };

  render() {
    const { isMounted, windowWidth, drawerOpen } = this.state;
    console.log(`is mounted: ${isMounted}`);
    return (
      <Column flexGrow={1} style={rootStyle} key="right">
        <Row horizontal="center">
          <Header toggleNavDrawer={this.toggleNavDrawer} />
        </Row>
        <Row vertical="center" flex={1}>
          <Column flex={1} horizontal="center">
            <Fade in={isMounted} timeout={2000}>
              <div>
                <ExampleComponent
                  image={MyPhoto}
                  imageWidth={this.#imagePercentWidth * windowWidth}
                  imageHeight={this.#imagePercentWidth * windowWidth + 20}
                  roundedSize="0"
                />
              </div>
            </Fade>
          </Column>
          <Column flex={1} horizontal="center">
            <Slide
              direction="left"
              in={isMounted}
              timeout={profileSnippetAnimDuration}
            >
              <div>
                <ProfileSnippet />
              </div>
            </Slide>
          </Column>
        </Row>

        <SwipeableDrawer
          anchor="right"
          open={drawerOpen}
          onClose={this.toggleNavDrawer}
          onOpen={this.toggleNavDrawer}
        >
          <Column flex={1} style={{ background: colorPrimary, width: "50vw" }}>
            <IconButton
              onClick={this.toggleNavDrawer}
              style={{ width: 70, height: 70 }}
            >
              <CloseIcon style={{ width: 50, height: 50, color: "fff" }} />
            </IconButton>
            <Column flex={1} justifyContent="center">
              <Typography
                variant="h2"
                style={{
                  marginLeft: 65,
                  fontWeight: 600,
                  color: "#fff",
                  fontFamily: "Segoe UI"
                }}
              >
                Contact
              </Typography>
              <div style={borderStyle} />
              <Typography
                variant="body1"
                style={{
                  marginLeft: 65,
                  marginRight: 65,
                  marginTop: 15,
                  color: "#fff",
                  fontFamily: "Segoe UI",
                  fontSize: "1.2em"
                }}
              >
                I'm currently a full time student but I'm always looking for new
                opportunities. If you have other questions, don't hesitate to
                ask!
              </Typography>
              <form>
                <Row
                  flex={1}
                  style={{ marginRight: 65, marginLeft: 65, marginTop: 20 }}
                >
                  <InputBase
                    placeholder="Name"
                    inputProps={{ "aria-label": "enter name" }}
                    style={{ ...textFieldStyle, marginRight: 15 }}
                  />
                  <InputBase
                    placeholder="Email"
                    inputProps={{ "aria-label": "enter email address" }}
                    style={textFieldStyle}
                  />
                </Row>
                <InputBase
                  placeholder="Subject"
                  inputProps={{ "aria-label": "enter email subject" }}
                  style={{
                    ...textFieldStyle,
                    flexGrow: 1,
                    display: "flex",
                    marginRight: 65,
                    marginLeft: 65,
                    marginTop: 15
                  }}
                />
                <InputBase
                  placeholder="Message"
                  inputProps={{ "aria-label": "enter email message" }}
                  multiline
                  rows={8}
                  style={{
                    ...textFieldStyle,
                    flexGrow: 1,
                    display: "flex",
                    marginRight: 65,
                    marginLeft: 65,
                    marginTop: 15
                  }}
                />
                <Row flex={1} justifyContent="center" style={{ marginTop: 20 }}>
                  <PrimaryActionButton variant="contained" borderRadius={90}>
                    <Row
                      justifyContent="center"
                      alignItems="center"
                      style={{ paddingTop: 5, paddingBottom: 5 }}
                    >
                      <Typography
                        variant="h5"
                        style={{ fontWeight: 500, fontFamily: "Segoe UI" }}
                      >
                        Send Message
                      </Typography>
                      <SendIcon style={{ marginLeft: 10 }} />
                    </Row>
                  </PrimaryActionButton>
                </Row>
              </form>
            </Column>
          </Column>
        </SwipeableDrawer>
      </Column>
    );
  }
}

export default index;
