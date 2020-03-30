import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import { selectPortfolioItem } from "../../redux/actions/actions-types";
import { connect } from "react-redux";

const PortfolioViewConnected = props => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  props.selectPortfolioItem(0);

  return (
    <div>
      {isDesktop && <DesktopView />}
      {isMobile && <MobileView />}
      {isTablet && <DesktopView />}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  selectPortfolioItem: appPreviewSelectedItem =>
      dispatch(selectPortfolioItem(appPreviewSelectedItem))
});

const PortfolioView = connect(
  null,
  mapDispatchToProps
)(PortfolioViewConnected);

export default PortfolioView;
