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

const rootStyle = {
  background: colorPrimary,
//   webkitBoxShadow: "0px 0px 58px 0px rgba(0,0,0,0.21)",
//   mozBoxShadow: "0px 0px 58px 0px rgba(0,0,0,0.21)",
//   boxShadow: "0px 0px 58px 0px rgba(0,0,0,0.21)",
//   borderRadius: 18,
  margin: "auto",
  width: "90%",
};

const socialBtnStyle = {
  background: "transparent",
  border: "none",
  cursor: "pointer"
};

export default function ProfileSnippetMobile() {
  return (
    <Column style={rootStyle}>
      <Row justifyContent="center" style={{ paddingTop: 30 }}>
        <ExampleComponent
          image={MyPhoto}
          imageWidth={158}
          imageHeight={160}
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
            marginTop: 20
          }}
        >
          Christilyn Arjona
        </Typography>
      <Typography
        variant="subtitle2"
        style={{
          fontFamily: "Segoe UI",
          fontWeight: 300,
          fontSize: 20,
          marginTop: 20,
          marginBottom: 5
        }}
      >
        {description}
      </Typography>
      <Row justifyContent="center" style={{ marginBottom: 10 }}>
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
