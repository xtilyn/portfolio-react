import React, { Component } from "react";
import List from "@material-ui/core/List";
import { colorPrimary } from "../constants/app_colors";
import Divider from "@material-ui/core/Divider";
import { ListItem, withStyles } from "@material-ui/core";
import { portfolioItems } from "../constants/app_data";
import { Typography } from "antd";
import { portfolioItemHeight } from "../constants/shared_variables";

const Title = Typography.Title;

const StyledListItem = withStyles({
  root: {
    width: "100%",
    height: portfolioItemHeight,
    backgroundColor: colorPrimary,
    "&$selected": {
      backgroundColor: "#585858",
      borderRadius: 18
    }
  },
  selected: {}
})(ListItem);

const rootStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: colorPrimary
}

export default class PortfolioItemsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };
  }

  handleListItemClick(event, index) {
    this.setState({
        selectedIndex: index
    });
    this.props.subject.next(index);
  };

  render() {
    const { selectedIndex } = this.state;

    const renderListItem = (portfolioItem, index) => {
      return (
        <div>
          <StyledListItem
            button
            selected={selectedIndex === index}
            onClick={event => this.handleListItemClick(event, index)}
          >
            <Title level={2} style={{ fontWeight: 400 }}>
              {portfolioItem.title}
            </Title>
          </StyledListItem>
          <Divider />
        </div>
      );
    };

    return (
      <div style={rootStyle}>
        <List component="div" aria-label="portfolio items">
          {portfolioItems.map((item, i) => {
            return renderListItem(item, i);
          })}
        </List>
      </div>
    );
  }
}
