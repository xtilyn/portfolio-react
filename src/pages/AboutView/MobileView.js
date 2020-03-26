import React, { useState } from "react";
import HeaderMobile from "../../HeaderMobile";
import { Column } from "simple-flexbox";
import { colorPrimary } from "../../constants/app_colors";
import { SwipeableDrawer } from "@material-ui/core";
import NavDrawer from "../../components/NavDrawer";

const rootStyle = {
  background: colorPrimary,
  width: "100vw",
  height: "100vh"
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
          <NavDrawer selectedItem={2} />
        </SwipeableDrawer>
        about view mobile
      </React.Fragment>
    </div>
  );
}
