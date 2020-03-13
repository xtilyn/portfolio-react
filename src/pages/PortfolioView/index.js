import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { colorPrimary } from '../../constants/app_colors';
import SimpleHeader from '../../components/SimpleHeader';
import Fade from '@material-ui/core/Fade';

const rootStyle = {
    width: '100%',
    height: '100%'
}

const appPreview = {
  height: "80vh",
  background: colorPrimary,
  filter: "drop-shadow(0px 3px 99px rgba(0, 0, 0, 0.16))",
  borderRadius: 20,
  marginTop: 30,
  marginRight: 80
};

export default class PortfolioView extends Component {
    render() {
        return (
          <Column flexGrow={1} style={rootStyle}>
            <Row horizontal="center">
              <SimpleHeader />
            </Row>
            <Row vertical="center">
              <Column flex={1} horizontal="center">
                <Fade in={true} timeout={1000}>
                  <div>Column 1</div>
                </Fade>
              </Column>
              <Column flex={1} horizontal="center" style={appPreview}>
                <Fade in={true} timeout={1000}>
                  <div>Column 2</div>
                </Fade>
              </Column>
            </Row>
          </Column>
        );
    }
}
