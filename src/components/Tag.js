import React, { Component } from 'react';

const rootStyle = {
  width: 155,
  height: 44,
  borderRadius: 5,
  background: "transparent",
  border: "1px solid #8c8787"
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
