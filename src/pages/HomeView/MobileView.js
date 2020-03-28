import React, { Component } from "react";
import { SwipeableDrawer, Button, IconButton } from "@material-ui/core";
import { Column, Row } from "simple-flexbox";
import MenuIcon from "@material-ui/icons/Menu";
import { colorPrimary } from "../../constants/app_colors";
import Signature from "../../components/Signature";
import Typography from "@material-ui/core/Typography";
import { colorAccent } from "../../constants/app_colors";
import ProfileSnippetMobile from "../../components/ProfileSnippetMobile";
import NavDrawer from "../../components/NavDrawer";
import HeaderMobile from "../../HeaderMobile";

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
  marginBottom: 15
};

export default class MobileView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpen: false
    };
  }

  toggleDrawer = () => {
    const { isDrawerOpen } = this.state;
    this.setState({
      isDrawerOpen: !isDrawerOpen
    });
  };

  render() {
    const { isDrawerOpen } = this.state;
    return (
      <div style={rootStyle}>
        <Column key="left" style={{ height: "100vh" }}>
          <HeaderMobile toggleDrawer={this.toggleDrawer} />
          <SwipeableDrawer
            anchor="left"
            open={isDrawerOpen}
            onClose={this.toggleDrawer}
            onOpen={this.toggleDrawer}
            style={{ background: colorPrimary }}
          >
            <NavDrawer selectedItem={0}/>
          </SwipeableDrawer>

          <Column flex={1}>
            {/* <Typography
              variant="h4"
              style={{ marginLeft: 20, fontWeight: 600, marginTop: 20,}}
            >
              Home
            </Typography>
            <div style={dividerStyle}></div> */}
            <ProfileSnippetMobile />
          </Column>
        </Column>
      </div>
    );
  }
}
