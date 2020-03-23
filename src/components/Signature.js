import React from "react";
import { Typography } from "antd";
import { colorAccent } from "../constants/app_colors";
import { Row, Column } from "simple-flexbox";

const Title = Typography.Title;

const circle = {
  borderRadius: "50%",
  background: colorAccent
};

const circleContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const Signature = props => {
  const { width, height } = props;
  return (
    <Column justifyContent="flex-end">
      <Row wrap>
        <Title
          level={2}
          style={{ fontWeight: 600, margin: 0, marginRight: 10 }}
        >
          CA
        </Title>
        <div style={circleContainer}>
          <span style={{ ...circle, width: width, height: height }} />
        </div>
      </Row>
    </Column>
  );
};

export default Signature;
