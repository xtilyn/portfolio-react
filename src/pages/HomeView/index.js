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
    constructor(props) {
        super(props)

        this.state = {
          isMounted: false
        }
    }

    componentDidMount() {
      console.log('test')
      this.setState({
        isMounted: true
      });
    }

    render() {
      const { isMounted } = this.state;
      console.log(`is mounted: ${isMounted}`)
        return (
          <Column flexGrow={1} style={rootStyle}>
            <Row horizontal="center">
              <Header />
            </Row>
            <Row vertical="center" style={{ height: "80vh" }}>
              <Column flex={1} horizontal="center" style={{ paddingTop: 50 }}>
                <Fade in={isMounted} timeout={2000}>
                  <div>
                    <ExampleComponent
                    image={MyPhoto}
                    imageWidth="550"
                    imageHeight="570"
                    roundedSize="0"
                  />
                  </div>
                </Fade>
              </Column>
              <Column flex={1} horizontal="center">
                <Slide direction='left' in={isMounted} timeout={profileSnippetAnimDuration}>
                  <div><ProfileSnippet /></div>
                </Slide>
              </Column>
            </Row>
          </Column>
        );
    }
}

export default index
