import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import HeaderMobile from "../../HeaderMobile";
import { colorPrimary } from "../../constants/app_colors";
import { SwipeableDrawer, Typography, InputBase } from "@material-ui/core";
import NavDrawer from "../../components/NavDrawer";
import { colorAccent } from "../../constants/app_colors";
import SendIcon from "@material-ui/icons/Send";
import PrimaryActionButton from "../../components/buttons/PrimaryActionButton";

const rootStyle = {
  background: colorPrimary,
  width: "100vw",
  height: "100vh"
};

const dividerStyle = {
  width: "17%",
  height: "5px",
  background: colorAccent,
  marginLeft: 22,
  marginTop: 10,
  marginBottom: 25
};

const cardStyle = {
  borderRadius: "43px 0px 0px 0px",
  background: "#505050",
  boxShadow: "0px -8px 39px rgba(0, 0, 0, 0.16)",
};

const inputContainer = {
  paddingTop: 2, 
  paddingBottom: 2,
  borderRadius: 8,
  background: "#5e5e5e",
  color: "#fff",
  paddingLeft: 8,
  paddingRight: 8
};

export default function MobileView(props) {
  const [isDrawerOpen, toggleDrawer] = useState(false);

  const toggleDrawerTrueFalse = () => {
    toggleDrawer(!isDrawerOpen);
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
          <NavDrawer selectedItem={3} />
        </SwipeableDrawer>
        <Column style={{ width: "100vw", height: "100vh" }}>
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
              Contact
            </Typography>
            <div style={dividerStyle}></div>
          </Column>
          <Column flexGrow={1} style={cardStyle} justifyContent="flex-start">
            <form style={{ textAlign: "start" }}>
              <InputBase
                placeholder="Name"
                inputProps={{ "aria-label": "enter name" }}
                style={{ ...inputContainer, marginLeft: 20, marginTop: 30 }}
                required
              />
              <InputBase
                placeholder="Email"
                inputProps={{ "aria-label": "enter email address" }}
                style={{ ...inputContainer, marginLeft: 20, marginTop: 10 }}
                required
              />
              <InputBase
                placeholder="Subject"
                inputProps={{ "aria-label": "enter email subject" }}
                style={{
                  ...inputContainer,
                  flexGrow: 1,
                  display: "flex",
                  marginTop: 35,
                  marginLeft: 20,
                  marginRight: 20
                }}
                required
              />
              <InputBase
                placeholder="Message"
                inputProps={{ "aria-label": "enter email message" }}
                multiline
                rows={8}
                style={{
                  ...inputContainer,
                  display: "flex",
                  marginTop: 15,
                  marginLeft: 20,
                  marginRight: 20
                }}
                required
              />
              <Row justifyContent="center" style={{ marginTop: 15 }}>
                <PrimaryActionButton
                  variant="contained"
                  borderRadius={90}
                  type="submit"
                >
                  <Row
                    justifyContent="center"
                    alignItems="center"
                    style={{ paddingTop: 5, paddingBottom: 5 }}
                  >
                    <Typography
                      variant="h5"
                      style={{ fontWeight: 500, fontSize: 16 }}
                    >
                      Send Message
                    </Typography>
                    <SendIcon style={{ marginLeft: 10 }} />
                  </Row>
                </PrimaryActionButton>
              </Row>
            </form>
          </Column>
        </Column>
      </React.Fragment>
    </div>
  );
}
