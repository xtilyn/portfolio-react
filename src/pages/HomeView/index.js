import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

const HomeView = props => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isDesktop && <DesktopView />}
      {isMobile && <MobileView />}
      {isTablet && <DesktopView />}
    </div>
  );
};

export default HomeView;
