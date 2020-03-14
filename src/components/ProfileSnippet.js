import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { colorPrimary, colorAccent } from '../constants/app_colors';
import { Typography } from 'antd';
import github from '../images/githubIcon.png';
import linkedIn from '../images/linkedInIcon.png';
import stackOverflow from '../images/stackoverflowIcon.png';
import { Link } from "react-router-dom";
import PrimaryActionButton from '../components/buttons/PrimaryActionButton';
import IconButton from '@material-ui/core/IconButton';
import { githubUrl, linkedInUrl, stackOverflowUrl} from '../constants/app_data';
import Collapse from '@material-ui/core/Collapse';
import { profileSnippetAnimDuration } from '../constants/shared_variables';

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

export default class ProfileSnippet extends Component {

  constructor(props) {
    super(props);

    this.state = {
      snippetEnterAnimFinished: false
    }
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({
        snippetEnterAnimFinished: true
      });
    }, profileSnippetAnimDuration);
  }

    render() {
      const { snippetEnterAnimFinished } = this.state;

        return (
          <Column flexGrow={1} style={rootStyle}>
            <Title level={1} style={nameStyle}>
              CHRISTILYN <br />
              ARJONA
            </Title>
            <div style={borderStyle} />
            <Title
              level={3}
              style={{ fontWeight: 300, marginRight: 100, marginBottom: 20 }}
            >
              A Software Developer currently specializing in Native Android App
              Development, UI/UX Design, and Front End Web Development.
            </Title>
            <Row>
              <IconButton
                aria-label="LinkedIn Profile link"
                style={socialBtnStyle}
                onClick={() => {
                  window.open(linkedInUrl, "_blank");
                }}
              >
                <img
                  src={linkedIn}
                  style={{ height: 40, width: 40 }}
                  alt={"LinkedIn Profile link"}
                />
              </IconButton>
              <IconButton
                aria-label="Stack Overflow Profile link"
                style={{ ...socialBtnStyle, marginLeft: 20 }}
                onClick={() => {
                  window.open(stackOverflowUrl, "_blank");
                }}
              >
                <img
                  src={stackOverflow}
                  style={{ height: 40, width: 40 }}
                  alt={"Stack Overflow Profile link"}
                />
              </IconButton>
              <IconButton
                aria-label="GitHub Profile link"
                style={{ ...socialBtnStyle, marginLeft: 11 }}
                onClick={() => {
                  window.open(githubUrl, "_blank");
                }}
              >
                <img
                  src={github}
                  style={{
                    height: 60,
                    width: 60
                  }}
                  alt={"GitHub Profile link"}
                />
              </IconButton>
            </Row>
            <Collapse in={snippetEnterAnimFinished} style={{ width: '320px' }}>
              <Link to="/portfolio" style={{ textDecoration: "none" }}>
                <PrimaryActionButton variant="contained">
                  See Portfolio
                </PrimaryActionButton>
              </Link>
            </Collapse>
          </Column>
        );
    }
}
