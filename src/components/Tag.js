import React, { Component } from 'react';

const rootStyle = {
  height: "36px",
  borderRadius: 5,
  background: "transparent",
  border: "1px solid #8c8787",
  alignSelf: "flex-start",
  paddingLeft: 20,
  paddingRight: 20,
  marginTop: 10,
  marginRight: 10,
  fontSize: 20,
  textAlign: "center",
  lineHeight: "36px"
};

export default class Tag extends Component {
    render() {
        return (
            <div style={rootStyle}>
                {this.props.title}
            </div>
        )
    }
}
