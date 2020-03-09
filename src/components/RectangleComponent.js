import React, { Component } from 'react'

export default class RectangleComponent extends Component {
    render() {
        const viewBox = `0 0 ${this.props.width} ${this.props.height}`
        return (
          <svg width={this.props.width} height={this.props.height} viewBox={viewBox}>
            <defs>
              <style>{".a{fill:#505050;}.b{filter:url(#a);}"}</style>
              <filter
                id="a"
                x={0}
                y={0}
                width={1255}
                height={1061}
                filterUnits="userSpaceOnUse"
              >
                <feOffset input="SourceAlpha" />
                <feGaussianBlur stdDeviation={37} result="b" />
                <feFlood floodOpacity={0.161} />
                <feComposite operator="in" in2="b" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g className="b" transform="matrix(1, 0, 0, 1, 0, 0)">
              <path
                className="a"
                d="M0,0H916a117,117,0,0,1,117,117V722A117,117,0,0,1,916,839H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
                transform="translate(1144 950) rotate(180)"
              />
            </g>
          </svg>
        );
    }
}
