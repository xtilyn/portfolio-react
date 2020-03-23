import React, { Component } from "react";
import { SwipeableDrawer, Button, IconButton } from "@material-ui/core";
import { Column, Row } from "simple-flexbox";
import MenuIcon from "@material-ui/icons/Menu";
import { colorPrimary } from "../../constants/app_colors";
import { Typography } from "antd";
import Signature from "../../components/Signature";

const Title = Typography.Title;

const rootStyle = {
  background: colorPrimary,
  width: "100vw",
  height: "100vh"
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
          <Row flex={1} style={{ height: 50, paddingLeft: 20, paddingRight: 20 }}>
            <IconButton onClick={this.toggleDrawer} style={{ padding: 0, marginTop: 15 }}>
              <MenuIcon style={{ color: "#fff" }}/>
            </IconButton>
            <Row flexGrow={1} />
            <Signature width={20} height={20} />
          </Row>
          <SwipeableDrawer
            anchor="left"
            open={isDrawerOpen}
            onClose={this.toggleDrawer}
            onOpen={this.toggleDrawer}
          >
            hi
          </SwipeableDrawer>

          <Column alignItems="start">
          Hasd
          </Column>
        </React.Fragment>
      </div>
    );
  }
}
