import React, { useState, useEffect, useRef, useCallback } from "react";
import { Row, Column } from "simple-flexbox";
import { Typography } from "@material-ui/core";
import { about1, about2, about3 } from "../constants/app_data.js";

const linesContainer = {
  borderRadius: "0px 0px 0px 12px",
  background: "#373737"
};

const rootStyle = {};

export default function Console() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [linesContainerWidth, setLinesContainerWidth] = useState(0);
  const [aboutTextHeight, setAboutTextHeight] = useState(0);

  const aboutText = useRef(null);

  const updateWindowDimensions = useCallback(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    const node = aboutText.current;
    if (node) {
      const calculatedHeight = node.clientHeight;
      setAboutTextHeight(calculatedHeight);
    }

    const aboutContainerWidth = (windowWidth / 2) * 0.69;
    const linesContainerWidth =
      aboutContainerWidth * 0.1 > 50 ? 50 : aboutContainerWidth * 0.3;
    setLinesContainerWidth(linesContainerWidth);
  }, [windowWidth]);

  window.addEventListener("resize", updateWindowDimensions);

  useEffect(() => {
    updateWindowDimensions();

    return function cleanUp() {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, [windowWidth, windowHeight, updateWindowDimensions]);

  const renderLineNumbers = () => {
    const node = aboutText.current;
    let temp;
    if (node) {
      const calculatedHeight = node.clientHeight;
      if (temp !== calculatedHeight) {
        temp = calculatedHeight;
      } else {
        temp = aboutTextHeight;
      }
    }

    let list = [];
    for (var i = 1; i <= Math.floor(temp / (13 * 1.42857)) + 1; i++) {
      list.push(
        <div style={{ fontSize: 12 }}>
          {i}
          <br></br>
        </div>
      );
    }
    return list;
  };

  console.log('about text height mobile: ', aboutTextHeight);

  return (
    <Row flex={1} style={rootStyle}>
      <Column
        style={{
          ...linesContainer,
          marginTop: 15,
          width: linesContainerWidth,
          overflow: "hidden",
        }}
      >
        <Typography
          variant="subtitle1"
          style={{ textAlign: "center", overflow: "hidden" }}
        >
          {renderLineNumbers()}
        </Typography>
      </Column>
      <Column flex={1} style={{ marginTop: 15 }}>
        <Typography
          ref={aboutText}
          variant="subtitle1"
          style={{
            textAlign: "start",
            marginLeft: 10,
            marginRight: 10,
            overflow: "hidden",
            marginBottom: 20,
            fontSize: 12,
          }}
        >
          {about1}
          <br></br>
          <br></br>
          {about2}
          <br></br>
          <br></br>
          {about3}
        </Typography>
      </Column>
    </Row>
  );
}
