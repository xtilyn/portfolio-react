import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import SimpleHeader from "../../components/SimpleHeader";
import androidPhone from "../../images/phone_android.png";

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
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  render() {
    const { windowWidth, windowHeight } = this.state;
    const aboutContainerWidth = (windowWidth / 2) * 0.69;
    const aboutContainerHeight = (windowHeight / 2) * 1.3;
    const linesContainerWidth = aboutContainerWidth * .1 > 50 ? 50 : aboutContainerWidth * .1;

    return (
      <Column flexGrow={1} style={rootStyle}>
        <Row>
          <SimpleHeader title="About" />
        </Row>
        <Row flex={1}>
          <Column flex={1} justifyContent="center" alignItems="center">
            <Column
              style={{
                ...aboutContainer,
                width: aboutContainerWidth,
                height: aboutContainerHeight
              }}
            >
              <Row
                justifyContent="end"
                style={{ marginTop: 20, marginRight: 20 }}
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
                    width: linesContainerWidth
                  }}
                ></Column>
                <Column flex={1}></Column>
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
