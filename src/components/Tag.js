import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Column } from 'simple-flexbox';

const rootStyle = {
  borderRadius: 5,
  background: "transparent",
  border: "1px solid #8c8787",
  alignSelf: "flex-start",
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 5,
  paddingBottom: 5,
  marginTop: 10,
  marginRight: 10,
  fontSize: 20,
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
