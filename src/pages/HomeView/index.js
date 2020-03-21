import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { colorPrimary } from '../../constants/app_colors';
import ProfileSnippet from '../../components/ProfileSnippet';
import ExampleComponent from "react-rounded-image";
import MyPhoto from '../../images/logo.png';
import Header from '../../components/Header';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import { profileSnippetAnimDuration } from '../../constants/shared_variables';

const rootStyle = {
    background: colorPrimary,
    width: '100%',
    height: '100%',
}

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
      windowHeight: 0
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

  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  };

  render() {
    const { isMounted, windowWidth, windowHeight } = this.state;
    console.log(`is mounted: ${isMounted}`);
    return (
      <Column flexGrow={1} style={rootStyle}>
        <Row horizontal="center">
          <Header />
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
      </Column>
    );
  }
}

export default index
