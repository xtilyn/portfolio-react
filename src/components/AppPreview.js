import React, { Component } from "react";
import { colorPrimary, colorAccent } from "../constants/app_colors";
import { portfolioItems } from "../constants/app_data";
import { Typography } from "antd";
import { Column, Row } from "simple-flexbox";
import Tag from "./Tag";

const Title = Typography.Title;

const appPreview = {
  height: "80vh",
  background: colorPrimary,
  filter: "drop-shadow(0px 3px 99px rgba(0, 0, 0, 0.16))",
  borderRadius: 20,
  marginTop: 30,
  marginRight: 80,
  width: "100%"
};

const borderStyle = {
  width: 258,
  height: 10,
  background: colorAccent,
  marginLeft: 38
};

export default class AppPreview extends Component {
  #subject;

  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: portfolioItems[0]
    };

    this.#subject = this.props.subject;
    this.#subject.subscribe({
      next: selectedItemIndex => {
        const selectedItemObject = portfolioItems[selectedItemIndex];
        console.log(selectedItemObject);
        this.setState({
          portfolioItem: selectedItemObject
        });
      }
    });
  }

  componentWillUnmount() {
    this.#subject.unsubscribe();
  }

  render() {
    const { portfolioItem } = this.state;
    return (
      <Column style={appPreview}>
        <Title
          level={2}
          style={{
            textAlign: "start",
            fontWeight: 600,
            fontSize: 53,
            marginLeft: 38,
            marginBottom: 15
          }}
        >
          {portfolioItem?.title ?? ""}
        </Title>
        <div style={borderStyle} />
        <Title
          level={3}
          style={{ fontWeight: 300, marginBottom: 20, textAlign: 'start', marginLeft: 38, width: '38%' }}
        >
          {portfolioItem?.description ?? ""}
        </Title>
        <Row style={{ width: '38%' }}>
            {
                // portfolioItem.tags.map( tag => {
                //     return <Tag title={tag}/>
                // })
                // TODO CONTINUE HERE USE FLEXBOX LAYOUT
            }
        </Row>
      </Column>
    );
  }
}
