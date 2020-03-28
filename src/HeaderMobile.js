import React from "react";
import { Row } from "simple-flexbox";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Signature from "./components/Signature";

export default function HeaderMobile(props) {
  return (
    <Row style={{ height: 50, paddingLeft: 20, paddingRight: 20 }}>
      <IconButton
        onClick={props.toggleDrawer}
        style={{ padding: 0, marginTop: 15 }}
      >
        <MenuIcon style={{ color: "#fff" }} />
      </IconButton>
      <Row flexGrow={1} />
      <Signature width={20} height={20} />
    </Row>
  );
}
