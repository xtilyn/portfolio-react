import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import { colorPrimary } from "../../constants/app_colors";
import SimpleHeader from "../../components/SimpleHeader";
import Fade from "@material-ui/core/Fade";
import { Slide } from "@material-ui/core";
import PortfolioItemsList from "../../components/PortfolioItemsList";
import { BehaviorSubject } from "rxjs";
import { portfolioItemHeight } from "../../constants/shared_variables";

const rootStyle = {
  width: "100%",
  height: "100%"
};

const appPreview = {
  height: "80vh",
  background: colorPrimary,
  filter: "drop-shadow(0px 3px 99px rgba(0, 0, 0, 0.16))",
  borderRadius: 20,
  marginTop: 30,
  marginRight: 80,
  width: "100%"
};

const circleIndicator = {
  width: 30,
  height: 30,
  background: "#acdb75",
  borderRadius: "50%",
  marginRight: 15
};

export default class PortfolioView extends Component {
  #subject;

  constructor(props) {
    super(props);
    this.#subject = new BehaviorSubject(0);

    this.state = {
      isMounted: false,
      circleIndicatorY: 0
    };
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    });
    this.#subject.subscribe({
      next: selectedItemIndex => {
        const marginTop = 54;
        const { circleIndicatorY } = this.state;
        const newCircleIndicatorY = marginTop + selectedItemIndex * portfolioItemHeight;
        const diff = Math.abs(circleIndicatorY - newCircleIndicatorY);
        console.log(diff);
        this.setState(
          {
            circleIndicatorY: newCircleIndicatorY,
            animDuration: diff > 700 ? 0 : 150
          }
        );
      }
    });
  }

  componentWillUnmount() {
    this.#subject.unsubscribe();
  }

  render() {
    const { isMounted, circleIndicatorY, animDuration } = this.state;

    return (
      <Column flexGrow={1} style={rootStyle}>
        <Row horizontal="center">
          <SimpleHeader />
        </Row>
        <Row vertical="start">
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
                  <PortfolioItemsList subject={this.#subject} />
                </Row>
              </div>
            </Fade>
          </Column>
          <Column flex={1} horizontal="center">
            <Slide in={isMounted} direction="left" timeout={800}>
              <div style={appPreview}>TODO reposition on scroll</div>
            </Slide>
          </Column>
        </Row>
      </Column>
    );
  }
}
