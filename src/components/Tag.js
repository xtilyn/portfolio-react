import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Column } from 'simple-flexbox';

const rootStyle = {
  borderRadius: 5,
  background: "transparent",
  border: "1px solid #8c8787",
  alignSelf: "flex-start",
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 3,
  paddingBottom: 3,
  marginTop: 5,
  marginRight: 5,
  fontSize: 16,
  textAlign: "center",
  lineHeight: "36px"
};

export default class Tag extends Component {
    render() {
        return (
            <Column style={rootStyle} justifyContent="center">
                <Typography variant="body2">{this.props.title}</Typography>
            </Column>
        )
    }
}
