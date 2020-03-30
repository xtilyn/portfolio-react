import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import SimpleHeader from "../../components/SimpleHeader";
import Fade from "@material-ui/core/Fade";
import { Slide } from "@material-ui/core";
import PortfolioItemsList from "../../components/PortfolioItemsList";
import { portfolioItemHeight } from "../../constants/shared_variables";
import AppPreview from "../../components/AppPreview";
import { connect } from "react-redux";
import { StickyContainer, Sticky } from "react-sticky";

const rootStyle = {
  width: "100%",
  height: "100%"
};

const circleIndicator = {
  width: 30,
  height: 30,
  background: "#acdb75",
  borderRadius: "50%",
  marginRight: 15
};

class DesktopViewConnected extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMounted: false,
      circleIndicatorY: 0
    };
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    });
    this.updateCircleIndicator(0);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const selectedItemIndex = this.props.appPreviewSelectedItem;
    if (prevProps.appPreviewSelectedItem !== selectedItemIndex) {
      this.updateCircleIndicator(selectedItemIndex);
    }
  }

  updateCircleIndicator = selectedItemIndex => {
    const { circleIndicatorY } = this.state;
    const marginTop = 54;
    const newCircleIndicatorY =
      marginTop + selectedItemIndex * portfolioItemHeight;
    const diff = Math.abs(circleIndicatorY - newCircleIndicatorY);
    console.log(diff);
    this.setState({
      circleIndicatorY: newCircleIndicatorY,
      animDuration: diff > 700 ? 0 : 150
    });
  };

  render() {
    const { isMounted, circleIndicatorY, animDuration } = this.state;

    return (
      <Column flexGrow={1} style={rootStyle}>
        <Row horizontal="center">
          <SimpleHeader title="Portfolio" />
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
                      transition: `transform ${animDuration}ms ${animDuration}ms ease-in`
                    }}
                  />
                  <PortfolioItemsList />
                </Row>
              </div>
            </Fade>
          </Column>
          <Column flex={1} horizontal="center" style={{ height: "100vh", paddingRight: 50 }}>
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

const mapStateToProps = state => ({
  appPreviewSelectedItem: state.appPreviewSelectedItem
});

const DesktopView = connect(mapStateToProps)(DesktopViewConnected);

export default DesktopView;
