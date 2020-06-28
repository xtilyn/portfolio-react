import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import SimpleHeader from "../../components/SimpleHeader";
import Fade from "@material-ui/core/Fade";
import { Slide, Typography } from "@material-ui/core";
import PortfolioItemsList from "../../components/PortfolioItemsList";
import { portfolioItemHeight } from "../../constants/shared_variables";
import AppPreview from "../../components/AppPreview";
import { connect } from "react-redux";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import WebIcon from "@material-ui/icons/Web";
import LaptopIcon from "@material-ui/icons/Laptop";
import { getTotalProjectsByType } from "../../constants/app_data.js";

const rootStyle = {
  width: "100%",
  height: "100vh"
};

const circleIndicator = {
  width: 30,
  height: 30,
  background: "#acdb75",
  borderRadius: "50%",
  marginRight: 15,
};

const tagStyle = {
  borderRadius: "43px",
  background: "#545454",
  border: "2px solid #707070",
  padding: "3px 10px 3px 10px",
};

const tagText = {
  fontSize: "0.6em",
};

const projectTypeIcons = {
  width: 25, 
  height: 25,
}

class DesktopViewConnected extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMounted: false,
      circleIndicatorY: 0,
    };
  }

  componentDidMount() {
    this.setState({
      isMounted: true,
    });
    this.updateCircleIndicator(0);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const selectedItemIndex = this.props.appPreviewSelectedItem;
    if (prevProps.appPreviewSelectedItem !== selectedItemIndex) {
      this.updateCircleIndicator(selectedItemIndex);
    }
  }

  updateCircleIndicator = (selectedItemIndex) => {
    const { circleIndicatorY } = this.state;
    const marginTop = Math.floor(portfolioItemHeight / 2);
    const newCircleIndicatorY =
      marginTop + selectedItemIndex * portfolioItemHeight;
    const diff = Math.abs(circleIndicatorY - newCircleIndicatorY);
    console.log(diff);
    this.setState({
      circleIndicatorY: newCircleIndicatorY,
      animDuration: diff > 700 ? 0 : 150,
    });
  };

  onMouseEnterTagItem = () => {
    // TODO update tag
  };

  onMouseLeaveTagItem = () => {
    // TODO update tag
  };

  render() {
    const { isMounted, circleIndicatorY, animDuration } = this.state;

    return (
      <Column flexGrow={1} style={rootStyle}>
        <Row horizontal="center" style={{ marginTop: 0 }}>
          <SimpleHeader title="Portfolio" />
        </Row>
        <Row
          alignItems="center"
          justifyContent="center"
          wrap
          style={{ marginLeft: 20, marginBottom: 5, marginTop: 10 }}
        >
          <Row
            style={tagStyle}
            onMouseEnter={this.onMouseEnterTagItem}
            onMouseLeave={this.onMouseLeaveTagItem}
          >
            <Typography variant="body2" style={tagText}>
              {getTotalProjectsByType("android") +
                getTotalProjectsByType("ios")}{" "}
              Mobile
            </Typography>
            <PhoneAndroidIcon style={{ marginLeft: 5, ...projectTypeIcons }} />
          </Row>
          <Row style={{ ...tagStyle, marginLeft: 5, marginRight: 5 }}>
            <Typography variant="body2" style={tagText}>
              {getTotalProjectsByType("web")} Web
            </Typography>
            <WebIcon style={{ marginLeft: 5, ...projectTypeIcons }} />
          </Row>
          <Row style={{ ...tagStyle }}>
            <Typography variant="body2" style={tagText}>
              {getTotalProjectsByType("desktop")} Desktop
            </Typography>
            <LaptopIcon style={{ marginLeft: 5, ...projectTypeIcons }} />
          </Row>
        </Row>
        <Row vertical="start" flex={1}>
          <Column flex={1} horizontal="center" style={{ paddingTop: 20 }}>
            <Fade in={true} timeout={1000}>
              <div style={{ width: "75%", height: "100%" }}>
                <Row>
                  <div
                    style={{
                      ...circleIndicator,
                      transform: `translate(${0}px, ${circleIndicatorY}px)`,
                      transition: `transform ${animDuration}ms ${animDuration}ms ease-in`,
                    }}
                  />
                  <PortfolioItemsList />
                </Row>
              </div>
            </Fade>
          </Column>
          <Column
            flex={1}
            horizontal="center"
            style={{ height: "100vh", paddingRight: 50 }}
          >
            <Slide in={isMounted} direction="left" timeout={800}>
              <div>
                <AppPreview />
              </div>
            </Slide>
          </Column>
        </Row>
      </Column>
    );
  }
}

const mapStateToProps = (state) => ({
  appPreviewSelectedItem: state.appPreviewSelectedItem,
});

const DesktopView = connect(mapStateToProps)(DesktopViewConnected);

export default DesktopView;
