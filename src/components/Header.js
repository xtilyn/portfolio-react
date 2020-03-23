import React, { Component } from "react";
import { Row } from "simple-flexbox";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Signature from "./Signature";

const rootStyle = {
  height: 100,
  marginBottom: 15,
  paddingLeft: 100
};

const circleContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const headerItemStyle = {
  ...circleContainer,
  marginRight: 80,
  marginTop: 50,
  fontSize: "25px",
  color: "#ffffff",
  fontWeight: 500
};

export default class Header extends Component {
  render() {
    return (
      <Row flexGrow={1} style={rootStyle}>
        <Signature width={30} height={30} />
        <Row flexGrow={1} />
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Button style={headerItemStyle}>About</Button>
        </Link>
        <Button
          style={{ ...headerItemStyle, marginRight: 100 }}
          onClick={this.props.toggleNavDrawer}
        >
          Contact
        </Button>
      </Row>
    );
  }
}
