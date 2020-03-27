import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

export default function AboutView() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {isDesktop && <DesktopView />}
      {isMobile && <MobileView />}
      {isTablet && <DesktopView />}
    </div>
  );
}
