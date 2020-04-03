import React from "react";
import { Column, Row } from "simple-flexbox";
import { colorPrimary } from "../constants/app_colors";
import ExampleComponent from "react-rounded-image";
import MyPhoto from "../images/logo.png";
import { Typography, IconButton } from "@material-ui/core";
import { description } from "../constants/app_data";
import {
  githubUrl,
  linkedInUrl,
  stackOverflowUrl,
  sourceCodeUrl
} from "../constants/app_data";
import github from "../images/githubIcon.png";
import linkedIn from "../images/linkedInIcon.png";
import stackOverflow from "../images/stackoverflowIcon.png";
import viewSource from "../images/view_source.png";
import PrimaryActionButton from "../components/buttons/PrimaryActionButton";
import { Link } from "react-router-dom";

const rootStyle = {
  background: colorPrimary,
  //   webkitBoxShadow: "0px 0px 58px 0px rgba(0,0,0,0.21)",
  //   mozBoxShadow: "0px 0px 58px 0px rgba(0,0,0,0.21)",
  //   boxShadow: "0px 0px 58px 0px rgba(0,0,0,0.21)",
  //   borderRadius: 18,
  width: "100%",
  flex: 1
};

const socialBtnStyle = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0
};

const cardStyle = {
  borderRadius: "66px 0px 0px 0px",
  background: "#5d5d5d",
  boxShadow: "0px 3px 0px rgba(0, 0, 0, 0.16)"
};

const dividerStyle = {
  width: "70%",
  height: "2px",
  background: "#848484"
};

export default function ProfileSnippetMobile() {
  return (
    <Column style={rootStyle}>
      <Column justifyContent="center" alignItems="center" flexGrow={1}>
        <Row justifyContent="center" style={{ paddingTop: 40 }}>
          <ExampleComponent
            image={MyPhoto}
            imageWidth={133}
            imageHeight={135}
            roundedSize="13"
            roundedColor="#E4E4E4"
          />
        </Row>
        <Typography
          variant="h4"
          style={{
            fontWeight: 600,
            textAlign: "center",
            marginLeft: 8,
            marginTop: 15,
            fontSize: 25
          }}
        >
          Christilyn Arjona
        </Typography>
        <Typography
          variant="body2"
          style={{ color: "#D2D2D2", marginTop: 6, marginBottom: 10 }}
        >
          SOFTWARE DEVELOPER
        </Typography>
      </Column>
      <Column flexGrow={1} style={cardStyle} alignItems="center">
        <Column flex={1}></Column>
        <Typography
          variant="subtitle2"
          style={{
            fontWeight: 300,
            fontSize: "1em",
            marginTop: 20,
            width: "85%"
          }}
        >
          {description}
        </Typography>
        <Column flex={1}></Column>
        <Link to="/portfolio" style={{ textDecoration: "none", marginBottom: 10, marginTop: 10 }}>
          <PrimaryActionButton variant="contained" borderRadius={36}>
            See Portfolio
          </PrimaryActionButton>
        </Link>
        <Column flex={1}></Column>
        <Column style={{ width: "100%" }} alignItems="center">
          <div style={dividerStyle}></div>
          <Row
            justifyContent="center"
            style={{ marginBottom: 10 }}
            flexGrow={1}
          >
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
            <IconButton
              aria-label="View source code"
              style={{ ...socialBtnStyle, marginLeft: 11 }}
              onClick={() => {
                window.open(sourceCodeUrl, "_blank");
              }}
            >
              <img
                src={viewSource}
                style={{
                  height: 40,
                  width: 40
                }}
                alt={"View source code"}
              />
            </IconButton>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
