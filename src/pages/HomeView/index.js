import React, { Component } from "react";
import { useMediaQuery } from 'react-responsive'
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

const HomeView = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div>
      { isDesktopOrLaptop && <DesktopView/> }
      { isTabletOrMobile && <MobileView /> }
    </div>
  );
}

export default HomeView;
