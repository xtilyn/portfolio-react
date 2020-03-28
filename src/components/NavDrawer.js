import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import ExampleComponent from "react-rounded-image";
import MyPhoto from "../images/logo.png";
import { colorPrimary } from "../constants/app_colors";
import Typography from "@material-ui/core/Typography";
import { withStyles, ListItem, List } from "@material-ui/core";
import { navItems, navRoutes } from "../constants/nav_drawer";
import { withRouter } from "react-router-dom";

const rootStyle = {
  width: "60vw",
  height: "100%",
  background: colorPrimary
};

const StyledListItem = withStyles({
  root: {
    width: "100%",
    height: 50,
    marginBottom: 10,
    backgroundColor: colorPrimary,
    "&$selected": {
      backgroundColor: "#585858",
      borderRadius: "0px 12px 12px 0px"
    }
  },
  selected: {}
})(ListItem);

class NavDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: this.props.selectedItem
    };
  }

  handleListItemClick = (event, index) => {
    this.setState({
      selectedIndex: index
    });
    console.log(navRoutes[navItems[index]]);
    this.props.history.push(navRoutes[navItems[index]]);
  };

  renderListItem = (navItem, index) => {
    const { selectedIndex } = this.state;
    return (
      <StyledListItem
        button
        selected={selectedIndex === index}
        onClick={event => this.handleListItemClick(event, index)}
      >
        <Typography
          variant="subtitle2"
          style={{
            fontWeight: selectedIndex === index ? 600 : 300,
            fontSize: 18,
            color: "#fff"
          }}
        >
          {navItem}
        </Typography>
      </StyledListItem>
    );
  };

  render() {
    return (
      <Column style={rootStyle} flex={1}>
        <Row justifyContent="center" style={{ paddingTop: 80 }}>
          <ExampleComponent
            image={MyPhoto}
            imageWidth={88}
            imageHeight={90}
            roundedSize="0"
          />
        </Row>
        <Typography
          variant="subtitle2"
          style={{
            fontSize: 17,
            color: "#fff",
            marginTop: 12,
            textAlign: "center",
            marginBottom: 20
          }}
        >
          @ChristilynArjona
        </Typography>
        <List
          component="div"
          aria-label="portfolio items"
          style={{ marginRight: 12 }}
        >
          {navItems.map((item, i) => {
            return this.renderListItem(item, i);
          })}
        </List>
      </Column>
    );
  }
}

export default withRouter(NavDrawer);
