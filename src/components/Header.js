import React, { Component } from 'react';
import { Row } from 'simple-flexbox';
import { Typography } from 'antd';
import { colorAccent } from '../constants/app_colors';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const Title = Typography.Title;

const rootStyle = {
    height: 100,
}

const circle = {
    borderRadius: '50%',
    width: 30,
    height: 30,
    background: colorAccent,
}

const circleContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const headerItemStyle = {
    ...circleContainer,
    marginRight: 80,
    marginTop: 50,
    fontSize: '25px',
    color: '#ffffff',
    fontWeight: 500
}

export default class Header extends Component {
    render() {
        return (
          <Row flexGrow={1} style={rootStyle}>
            <div
              style={{
                ...circleContainer,
                marginRight: 10,
                marginLeft: 100,
                marginTop: 50
              }}
            >
              <Title level={2} style={{ fontWeight: 600, margin: 0 }}>
                CA
              </Title>
            </div>
            <div style={{ ...circleContainer, marginTop: 50 }}>
              <span style={circle} />
            </div>
            <Row flexGrow={1} />
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button style={headerItemStyle}>About</Button>
            </Link>
            <Button style={{ ...headerItemStyle, marginRight: 100 }}>
              Contact
            </Button>
          </Row>
        );
    }
}
