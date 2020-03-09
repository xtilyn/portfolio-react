import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { colorPrimary, colorAccent } from '../constants/app_colors';
import { Typography } from 'antd';
import github from '../images/githubIcon.png';
import linkedIn from '../images/linkedInIcon.png';
import stackOverflow from '../images/stackoverflowIcon.png';
import { Link } from "react-router-dom";

const Title = Typography.Title;

const rootStyle = {
  width: "100%",
  height: "80vh",
  borderRadius: "117px 0px 0px 117px",
  background: colorPrimary,
  boxShadow: "0px 0px 74px rgba(0, 0, 0, 0.16)",
  textAlign: "left",
  paddingLeft: 80,
  marginTop: 90,
};

const borderStyle = {
  width: "319px",
  height: "13px",
  background: colorAccent
};

const nameStyle = {
    fontSize: '80px', 
    fontWeight: 600, 
    marginBottom: 20
}

const socialBtnStyle = {
    background: 'transparent', 
    border: 'none',
    cursor: 'pointer'
}

const portfolioBtnStyle = {
  width: "320px",
  height: "60px",
  borderRadius: "10px",
  background: "#acdb75",
  marginTop: 20,
  textAlign: 'center',
  verticalAlign: 'middle',
  display: 'table',
  cursor: 'pointer'
};

export default class ProfileSnippet extends Component {
    render() {
        return (
          <Column flexGrow={1} style={rootStyle}>
            <Title level={1} style={nameStyle}>
              CHRISTILYN <br />
              ARJONA
            </Title>
            <view style={borderStyle} />
            <Title
              level={3}
              style={{ fontWeight: 600, marginRight: 50, marginBottom: 20 }}
            >
              A Software Developer currently specializing in Native Android App
              Development, UI/UX Design, and Front End Web Development.
            </Title>
            <Row>
              <button style={socialBtnStyle}>
                <img
                  src={linkedIn}
                  style={{ height: 40, width: 40 }}
                  alt={"LinkedIn Profile link"}
                />
              </button>
              <button style={{ ...socialBtnStyle, marginLeft: 20 }}>
                <img
                  src={stackOverflow}
                  style={{ height: 40, width: 40 }}
                  alt={"Stack Overflow Profile link"}
                />
              </button>
              <button style={{ ...socialBtnStyle, marginLeft: 11 }}>
                <img
                  src={github}
                  style={{
                    height: 60,
                    width: 60
                  }}
                  alt={"GitHub Profile link"}
                />
              </button>
            </Row>
            <div style={portfolioBtnStyle} onClick={this.goToPortfolio}>
              <Link
                to="/portfolio"
                style={{
                  verticalAlign: "middle",
                  color: "#2E2929",
                  fontWeight: 600,
                  marginTop: 20,
                  display: "table-cell",
                  textDecoration: "none"
                }}
              >
                See Portfolio
              </Link>
            </div>
          </Column>
        );
    }
}
