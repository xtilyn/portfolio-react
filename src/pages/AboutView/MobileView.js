import React, { useState, useCallback, useEffect } from "react";
import HeaderMobile from "../../HeaderMobile";
import { Column, Row } from "simple-flexbox";
import { colorPrimary } from "../../constants/app_colors";
import { SwipeableDrawer, Typography } from "@material-ui/core";
import NavDrawer from "../../components/NavDrawer";
import Console from "../../components/Console";
import { colorAccent } from "../../constants/app_colors";
import Flippy from "react-flippy/dist/Flippy";
import { FrontSide } from "react-flippy";
import { BackSide } from "react-flippy/dist/FlippyCard";
import firebaseIcon from "../../images/firebase_icon.png";
import androidIcon from "../../images/android_icon.png";
import reactIcon from "../../images/react_icon.png";
import nodeIcon from "../../images/node_icon.png";
import mongoIcon from "../../images/mongo_icon.png";
import reduxIcon from "../../images/redux_icon.png";
import flutterIcon from "../../images/flutter_icon.png";
import xdIcon from "../../images/xd_icon.png";

const rootStyle = {
  background: colorPrimary,
  width: "100vw",
  height: "100vh"
};

const tile = {
  background: "#5e5e5e",
  borderRadius: "14px"
};

const consoleStyle = {
  borderRadius: "12px",
  background: "#3d3d3d",
  boxShadow: "0px 3px 99px rgba(0, 0, 0, 0.16)",
  marginRight: 15,
  marginLeft: 15
};

const dot = {
  height: "15px",
  width: "15px",
  borderRadius: "50%"
};

const dividerStyle = {
  width: "17%",
  height: "5px",
  background: colorAccent,
  marginLeft: 22,
  marginTop: 10,
  marginBottom: 25
};

const flippySidesStyle = {
  backgroundColor: "transparent",
  boxShadow: "none",
  padding: 0
};

export default function MobileView(props) {
  const [isDrawerOpen, toggleDrawer] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowDimensions = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  window.addEventListener("resize", updateWindowDimensions);

  const toggleDrawerTrueFalse = () => {
    toggleDrawer(!isDrawerOpen);
  };

  useEffect(() => {
    updateWindowDimensions();

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, [updateWindowDimensions]);

  const tileMarginRight = 10;
  const tileWidth = (windowWidth - 30) / 3 - tileMarginRight;

  const renderTechTile = icon => {
    return (
      <Flippy style={{ marginRight: tileMarginRight }}>
        <FrontSide style={flippySidesStyle}>
          <img
            src={icon.img}
            style={{
              width: tileWidth,
              height: tileWidth
            }}
            alt=""
          />
        </FrontSide>

        <BackSide style={flippySidesStyle}>
          <Column
            style={{
              ...tile,
              width: tileWidth,
              height: tileWidth
            }}
            justifyContent="center"
          >
            <Typography variant="body1" style={{ fontFamily: "Source Code Pro", fontSize: 12, padding: 5 }}>
              {icon.title}
            </Typography>
          </Column>
        </BackSide>
      </Flippy>
    );
  };

  const renderTechTiles = icons => {
    return (
      <Row style={{ marginRight: 15, marginLeft: 20, marginTop: 5 }}>
        {icons.map(icon => renderTechTile(icon))}
      </Row>
    );
  };

  return (
    <div style={rootStyle}>
      <React.Fragment key="left">
        <HeaderMobile toggleDrawer={toggleDrawerTrueFalse} />
        <SwipeableDrawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawerTrueFalse}
          onOpen={toggleDrawerTrueFalse}
          style={{ background: colorPrimary }}
        >
          <NavDrawer selectedItem={2} />
        </SwipeableDrawer>
        <Column style={{ width: "100vw", height: "100vh", paddingBottom: 200 }}>
          <Column>
            <Typography
              variant="h4"
              style={{
                marginLeft: 20,
                fontWeight: 600,
                marginTop: 20,
                textAlign: "start"
              }}
            >
              About
            </Typography>
            <div style={dividerStyle}></div>
          </Column>
          <Column style={consoleStyle}>
            <Row
              justifyContent="end"
              style={{
                marginTop: 10,
                marginRight: 17
              }}
            >
              <div style={{ ...dot, background: "#A5FFA8", marginRight: 5 }} />
              <div style={{ ...dot, background: "#FCF996", marginRight: 5 }} />
              <div style={{ ...dot, background: "#FF6767" }} />
            </Row>
            <Console />
          </Column>

          <Typography
            variant="h6"
            style={{
              textAlign: "start",
              marginLeft: 18,
              marginTop: 30,
              color: "#E1E1E1"
            }}
          >
            I've worked with:
          </Typography>
          {renderTechTiles([
            { img: firebaseIcon, title: "Firebase" },
            { img: androidIcon, title: "Native Android Development" },
            { img: reactIcon, title: "React JS & React Native" }
          ])}
          {renderTechTiles([
            { img: nodeIcon, title: "Node JS" },
            { img: mongoIcon, title: "Mongo DB" },
            { img: reduxIcon, title: "Redux" }
          ])}
          {renderTechTiles([
            { img: flutterIcon, title: "Flutter" },
            { img: xdIcon, title: "Adobe XD" }
          ])}
        </Column>
      </React.Fragment>
    </div>
  );
}
