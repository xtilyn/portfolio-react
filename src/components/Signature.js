import React from "react";
import { colorAccent } from "../constants/app_colors";
import { Row, Column } from "simple-flexbox";
import { Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

const circle = {
  borderRadius: "50%",
  background: colorAccent,
  marginTop: 15
};

const circleContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const Signature = props => {
  const { width, height } = props;
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  return (
    <Column justifyContent="flex-end">
      <Row wrap>
        <Typography
          variant={isMobile ? "h5" : "h3"}
          style={{ fontWeight: 600, marginTop: 15, marginRight: 10 }}
        >
          CA
        </Typography>
        <div style={circleContainer}>
          <span style={{ ...circle, width: width, height: height }} />
        </div>
      </Row>
    </Column>
  );
};

export default Signature;
