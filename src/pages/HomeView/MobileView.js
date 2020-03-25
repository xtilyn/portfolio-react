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
        <React.Fragment key="left">
          <Row
            flex={1}
            style={{ height: 50, paddingLeft: 20, paddingRight: 20 }}
          >
            <IconButton
              onClick={this.toggleDrawer}
              style={{ padding: 0, marginTop: 15 }}
            >
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>
            <Row flexGrow={1} />
            <Signature width={20} height={20} />
          </Row>
          <SwipeableDrawer
            anchor="left"
            open={isDrawerOpen}
            onClose={this.toggleDrawer}
            onOpen={this.toggleDrawer}
            style={{ background: colorPrimary }}
          >
            <NavDrawer selectedItem={0}/>
          </SwipeableDrawer>

          <Column style={{ height: "100vh" }}>
            {/* <Typography
              variant="h4"
              style={{ marginLeft: 20, fontWeight: 600, marginTop: 20,}}
            >
              Home
            </Typography>
            <div style={dividerStyle}></div> */}
            <ProfileSnippetMobile />
          </Column>
        </React.Fragment>
      </div>
    );
  }
}
