import React, { Component } from "react";
import List from "@material-ui/core/List";
import { colorPrimary } from "../constants/app_colors";
import Divider from "@material-ui/core/Divider";
import { ListItem, withStyles, Typography } from "@material-ui/core";
import { portfolioItems } from "../constants/app_data";
import { portfolioItemHeight } from "../constants/shared_variables";
import { selectPortfolioItem } from "../redux/actions/actions-types";
import { connect } from "react-redux";

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
};

class PortfolioItemsListConnected extends Component {
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
    this.props.selectPortfolioItem(index);
  }

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
            <Typography variant="h4" style={{ fontWeight: 400 }}>
              {portfolioItem.title}
            </Typography>
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

function mapDispatchToProps(dispatch) {
  return {
    selectPortfolioItem: appPreviewSelectedItem =>
      dispatch(selectPortfolioItem(appPreviewSelectedItem))
  };
}

const PortfolioItemsList = connect(
  null,
  mapDispatchToProps
)(PortfolioItemsListConnected);

export default PortfolioItemsList;
