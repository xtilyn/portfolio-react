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
  stackOverflowUrl
} from "../constants/app_data";
import github from "../images/githubIcon.png";
import linkedIn from "../images/linkedInIcon.png";
import stackOverflow from "../images/stackoverflowIcon.png";
import PrimaryActionButton from "../components/buttons/PrimaryActionButton";
import { Link } from "react-router-dom";

const rootStyle = {
  background: colorPrimary,
  //   webkitBoxShadow: "0px 0px 58px 0px rgba(0,0,0,0.21)",
  //   mozBoxShadow: "0px 0px 58px 0px rgba(0,0,0,0.21)",
  //   boxShadow: "0px 0px 58px 0px rgba(0,0,0,0.21)",
  //   borderRadius: 18,
  margin: "auto",
  width: "100%",
  height: "100%"
};

const socialBtnStyle = {
  background: "transparent",
  border: "none",
  cursor: "pointer"
};

const cardStyle = {
  borderRadius: "17px",
  background: "#5d5d5d",
  marginLeft: 24,
  marginRight: 24,
  paddingBottom: 40
};

export default function ProfileSnippetMobile() {
  return (
    <Column style={rootStyle}>
      <Column flex={1}></Column>
      <Column justifyContent="center" alignItems="center" style={cardStyle}>
        <Row justifyContent="center" style={{ paddingTop: 40 }}>
          <ExampleComponent
            image={MyPhoto}
            imageWidth={128}
            imageHeight={130}
            roundedSize="0"
          />
        </Row>
        <Typography
          variant="h4"
          style={{
            fontWeight: 600,
            fontFamily: "Segoe UI",
            textAlign: "center",
            marginLeft: 8,
            marginTop: 15,
            fontSize: 25
          }}
        >
          Christilyn Arjona
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            fontFamily: "Segoe UI",
            fontWeight: 300,
            fontSize: 16,
            marginTop: 60,
            marginBottom: 20,
            width: "85%"
          }}
        >
          {description}
        </Typography>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <PrimaryActionButton variant="contained" borderRadius={36}>
            See Portfolio
          </PrimaryActionButton>
        </Link>
      </Column>
      <Row justifyContent="center" style={{ marginBottom: 50 }} flexGrow={1}>
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
    </Column>
  );
}
