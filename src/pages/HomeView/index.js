import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { colorPrimary } from '../../constants/app_colors';
import ProfileSnippet from '../../components/ProfileSnippet';
import ExampleComponent from "react-rounded-image";
import MyPhoto from '../../images/logo.png';
import Header from '../../components/Header';

const rootStyle = {
    background: colorPrimary,
    width: '100%',
    height: '100%',
    overflow: 'hidden'
}

class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
          <Column flexGrow={1} style={rootStyle}>
            <Row horizontal="center">
              <Header />
            </Row>
            <Row vertical="center" style={{ height: "80vh" }}>
              <Column flex={1} horizontal="center" style={{ paddingTop: 50 }}>
                <ExampleComponent
                  image={MyPhoto}
                  imageWidth="550"
                  imageHeight="570"
                  roundedSize="0"
                />
              </Column>
              <Column flex={1} horizontal="center">
                <ProfileSnippet />
              </Column>
            </Row>
          </Column>
        );
    }
}

export default index
