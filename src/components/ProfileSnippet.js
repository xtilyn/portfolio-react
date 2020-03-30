import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import { colorPrimary, colorAccent } from "../constants/app_colors";
import github from "../images/githubIcon.png";
import linkedIn from "../images/linkedInIcon.png";
import stackOverflow from "../images/stackoverflowIcon.png";
import viewSource from "../images/view_source.png";
import { Link } from "react-router-dom";
import PrimaryActionButton from "../components/buttons/PrimaryActionButton";
import IconButton from "@material-ui/core/IconButton";
import {
  githubUrl,
  linkedInUrl,
  stackOverflowUrl,
  sourceCodeUrl
} from "../constants/app_data";
import Collapse from "@material-ui/core/Collapse";
import { profileSnippetAnimDuration } from "../constants/shared_variables";
import { description } from "../constants/app_data";
import { Typography, Tooltip } from "@material-ui/core";

const rootStyle = {
  borderRadius: "117px 0px 0px 117px",
  background: colorPrimary,
  boxShadow: "0px 0px 74px rgba(0, 0, 0, 0.16)",
  textAlign: "left",
  paddingLeft: 80,
  paddingBottom: 50,
  paddingTop: 40,
  minHeight: "65vh"
};

const borderStyle = {
  width: "319px",
  height: "13px",
  background: colorAccent
};

const socialBtnStyle = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0,
  marginBottom: 20
};

export default class ProfileSnippet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snippetEnterAnimFinished: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        snippetEnterAnimFinished: true
      });
    }, profileSnippetAnimDuration);
  }

  render() {
    const { snippetEnterAnimFinished } = this.state;

    return (
      <Column flexGrow={1} style={rootStyle} justifyContent="center">
        <Typography
          variant="h1"
          style={{
            fontSize: "3em",
            fontWeight: 600,
            marginBottom: 15,
            marginTop: 0
          }}
        >
          CHRISTILYN <br />
          ARJONA
        </Typography>
        <div style={borderStyle} />
        <Typography
          variant="h5"
          style={{
            fontWeight: 300,
            marginRight: 100,
            marginBottom: 0,
            marginTop: 15
          }}
        >
          {description}
        </Typography>
        <Row>
          <IconButton
            aria-label="LinkedIn Profile link"
            style={socialBtnStyle}
            onClick={() => {
              window.open(linkedInUrl, "_blank");
            }}
          >
            <Tooltip title="LinkedIn" aria-label="LinkedIn" placement="bottom">
              <img
                src={linkedIn}
                style={{ height: 40, width: 40 }}
                alt={"LinkedIn Profile link"}
              />
            </Tooltip>
          </IconButton>
          <IconButton
            aria-label="Stack Overflow Profile link"
            style={{ ...socialBtnStyle, marginLeft: 20 }}
            onClick={() => {
              window.open(stackOverflowUrl, "_blank");
            }}
          >
            <Tooltip
              title="StackOverflow"
              aria-label="StackOverflow"
              placement="bottom"
            >
              <img
                src={stackOverflow}
                style={{ height: 40, width: 40 }}
                alt={"Stack Overflow Profile link"}
              />
            </Tooltip>
          </IconButton>
          <IconButton
            aria-label="GitHub Profile link"
            style={{ ...socialBtnStyle, marginLeft: 11 }}
            onClick={() => {
              window.open(githubUrl, "_blank");
            }}
          >
            <Tooltip title="Github" aria-label="github" placement="bottom">
              <img
                src={github}
                style={{
                  height: 60,
                  width: 60
                }}
                alt={"GitHub Profile link"}
              />
            </Tooltip>
          </IconButton>
          <IconButton
            aria-label="View source code link"
            style={{ ...socialBtnStyle, marginLeft: 11 }}
            onClick={() => {
              window.open(sourceCodeUrl, "_blank");
            }}
          >
            <Tooltip
              title="View source code"
              aria-label="view source code"
              placement="bottom"
            >
              <img
                src={viewSource}
                style={{
                  height: 40,
                  width: 40
                }}
                alt={"View source code link"}
              />
            </Tooltip>
          </IconButton>
        </Row>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <PrimaryActionButton variant="contained" borderRadius={10}>
            See Portfolio
          </PrimaryActionButton>
        </Link>
      </Column>
    );
  }
}
