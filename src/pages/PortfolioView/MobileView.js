import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import HeaderMobile from "../../HeaderMobile";
import { colorPrimary } from "../../constants/app_colors";
import { SwipeableDrawer, Typography } from "@material-ui/core";
import NavDrawer from "../../components/NavDrawer";
import { colorAccent } from "../../constants/app_colors";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import WebIcon from "@material-ui/icons/Web";
import LaptopIcon from "@material-ui/icons/Laptop";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { portfolioItems } from "../../constants/app_data";
import Tag from "../../components/Tag";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PrimaryActionButton from "../../components/buttons/PrimaryActionButton";
import OpenInNewOutlinedIcon from "@material-ui/icons/OpenInNewOutlined";
import { getTotalProjectsByType } from "../../constants/app_data.js";
import "./style.css";

const rootStyle = {
  background: colorPrimary,
  width: "100vw",
  height: "100vh",
  overflowY: "scroll",
};

const portfolioTagStyle = {
  borderRadius: 5,
  background: "transparent",
  border: "1px solid #8c8787",
  alignSelf: "flex-start",
  paddingLeft: 5,
  paddingTop: 2,
  paddingBottom: 2,
  paddingRight: 5,
  marginTop: 3,
  marginRight: 3,
  textAlign: "center",
  lineHeight: "26px",
};

const dividerStyle = {
  width: "17%",
  height: "5px",
  background: colorAccent,
  marginLeft: 22,
  marginTop: 10,
  marginBottom: 10,
};

const tagStyle = {
  borderRadius: "43px",
  background: "#545454",
  border: "2px solid #707070",
  padding: "3px 10px 3px 10px",
};

const tagText = {
  fontSize: "0.7em",
};

const slideStyle = {
  margin: 15,
  borderRadius: "20px",
  background: "#5d5d5d",
  height: "95%",
  marginTop: 10,
  flex: 1,
  overflow: "hidden",
};

const stepperStyle = {
  width: "100vw",
  background: colorPrimary,
  marginBottom: 30,
};

export default function MobileView(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [swipeableIndex, setSwipeableIndex] = useState(0);
  const [isDrawerOpen, toggleDrawer] = useState(false);

  const toggleDrawerTrueFalse = () => {
    toggleDrawer(!isDrawerOpen);
  };

  const onChangeIndexCallback = (index) => {
    setActiveStep(index);
  };

  const handleNext = () => {
    const current = activeStep + 1;
    setActiveStep(current);
    setSwipeableIndex(current);
  };

  const handleBack = () => {
    const current = activeStep - 1;
    setActiveStep(current);
    setSwipeableIndex(current);
  };

  const renderTag = (tag) => {
    return (
      <Column style={portfolioTagStyle} justifyContent="center">
        <Typography variant="body2" style={{ fontSize: "0.7em" }}>
          {tag}
        </Typography>
      </Column>
    );
  };

  const renderPortfolioItem = (portfolioItem) => {
    return (
      <Column style={slideStyle} justifyContent="center">
        <Row justifyContent="center" style={{ marginTop: 10 }}>
          <img
            src={portfolioItem.mobileImagePath || portfolioItem.imagePath}
            alt="app images"
            style={{ width: "90%" }}
          />
        </Row>
        <Typography
          variant="h5"
          style={{
            textAlign: "start",
            marginLeft: 20,
            fontWeight: 600,
          }}
        >
          {portfolioItem.title}
        </Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: "start",
            fontWeight: 300,
            fontSize: "0.9em",
            marginLeft: 20,
            marginTop: 7,
            marginRight: 20,
          }}
        >
          {portfolioItem.description}
        </Typography>
        <Row
          wrap
          vertical="flex-start"
          alignContent="start"
          justifyContent="flex-start"
          alignItems="flex-end"
          style={{ marginLeft: 20, marginTop: 10, marginRight: 20 }}
        >
          {portfolioItem.tags.slice(0, 5).map((tag) => renderTag(tag))}
          {portfolioItem.tags.length > 5 ? (
            <Column justifyContent="center">
              <Typography
                variant="body2"
                style={{ fontSize: "0.9em", marginTop: 6 }}
              >
                +{portfolioItem.tags.length - 5}
              </Typography>
            </Column>
          ) : (
            ""
          )}
        </Row>
        <Column
          justifyContent="center"
          alignItems="center"
          style={{ paddingTop: 20, paddingBottom: 20 }}
        >
          <div>
            <PrimaryActionButton
              variant="contained"
              borderRadius={36}
              onClick={() => {
                window.open(portfolioItem.url, "_blank");
              }}
            >
              View Project{" "}
              <OpenInNewOutlinedIcon style={{ width: 15, height: 15 }} />
            </PrimaryActionButton>
          </div>
        </Column>
      </Column>
    );
  };

  return (
    <div style={rootStyle}>
      <Column key="left" style={{ height: "100vh" }}>
        <HeaderMobile toggleDrawer={toggleDrawerTrueFalse} />
        <SwipeableDrawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawerTrueFalse}
          onOpen={toggleDrawerTrueFalse}
          style={{ background: colorPrimary }}
        >
          <NavDrawer selectedItem={1} />
        </SwipeableDrawer>
        <Column style={{ width: "100vw" }} flex={1} flexGrow={1}>
          <Column>
            <Typography
              variant="h4"
              style={{
                marginLeft: 20,
                fontWeight: 600,
                marginTop: 20,
                textAlign: "start",
              }}
            >
              Portfolio
            </Typography>
            <div style={dividerStyle}></div>
          </Column>
          <Column flexGrow={1}>
            <Row
              alignItems="center"
              wrap
              style={{ marginLeft: 20, marginBottom: 5 }}
            >
              <Row style={tagStyle}>
                <Typography variant="body2" style={tagText}>
                  {getTotalProjectsByType("android") +
                    getTotalProjectsByType("ios")}{" "}
                  Mobile
                </Typography>
                <PhoneAndroidIcon
                  style={{ marginLeft: 5, width: 15, height: 15 }}
                />
              </Row>
              <Row style={{ ...tagStyle, marginLeft: 5, marginRight: 5 }}>
                <Typography variant="body2" style={tagText}>
                  {getTotalProjectsByType("web")} Web
                </Typography>
                <WebIcon style={{ marginLeft: 5, width: 15, height: 15 }} />
              </Row>
              <Row style={{ ...tagStyle }}>
                <Typography variant="body2" style={tagText}>
                  {getTotalProjectsByType("desktop")} Desktop
                </Typography>
                <LaptopIcon style={{ marginLeft: 5, width: 15, height: 15 }} />
              </Row>
            </Row>
            <Column flexGrow={1}>
              <SwipeableViews
                enableMouseEvents
                onChangeIndex={onChangeIndexCallback}
                index={swipeableIndex}
                className="swipeable"
                style={{ paddingRight: "30px" }}
              >
                {portfolioItems.map((item) => renderPortfolioItem(item))}
              </SwipeableViews>
              <MobileStepper
                variant="dots"
                steps={portfolioItems.length}
                position="static"
                activeStep={activeStep}
                style={{ background: colorPrimary }}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === portfolioItems.length - 1}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                  </Button>
                }
              />
            </Column>
          </Column>
        </Column>
      </Column>
    </div>
  );
}
