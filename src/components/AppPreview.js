import React, { Component } from "react";
import { colorPrimary, colorAccent } from "../constants/app_colors";
import { portfolioItems } from "../constants/app_data";
import { Column, Row } from "simple-flexbox";
import Tag from "./Tag";
import PrimaryActionButton from "./buttons/PrimaryActionButton";
import OpenInNewOutlinedIcon from "@material-ui/icons/OpenInNewOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import IconButton from "@material-ui/core/IconButton";
import { ClickAwayListener, Tooltip, Typography } from "@material-ui/core";
import ReactDOM from 'react-dom';

const appPreview = {
  minHeight: "80vh",
  background: colorPrimary,
  filter: "drop-shadow(0px 3px 99px rgba(0, 0, 0, 0.16))",
  borderRadius: 20,
  marginTop: 30,
  marginRight: 80,
  width: "100%"
};

const borderStyle = {
  width: 158,
  height: 10,
  background: colorAccent,
  marginLeft: 38
};

const tooltipTitleStyle = {
  fontSize: 16,
  fontWeight: 300,
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 5
};

export default class AppPreview extends Component {
  #subject;

  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: portfolioItems[0],
      tooltipOpen: false,
      positionY: 0,
      height: 0,
      translateY: 0
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

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const domRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.setState({
      positionY: domRect.y,
      height: domRect.height
    });
    document.body.style = `background: ${colorPrimary};`;
  }

  componentWillUnmount() {
    this.#subject.unsubscribe();
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    console.log("yOffset: ", window.pageYOffset);
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log("you're at the bottom of the page");
      return;
    }
    if (window.pageYOffset === 0) {
      console.log("scroll to top!");
      this.setState({
        translateY: 0
      });
    }

    const { positionY } = this.state ?? 0;
    if (!positionY) return;
    const temp = window.pageYOffset + 50;
    if (temp > positionY) {
      const diff = temp - positionY;
      this.setState({
        translateY: diff
      });
    }
  };

  handleTooltipClose = () => {
    this.setState({
      tooltipOpen: false
    });
  };

  handleTooltipOpen = () => {
    this.setState({
      tooltipOpen: true
    });
  };

  renderLinkButton = url => {
    return (
      <PrimaryActionButton
        variant="contained"
        borderRadius={38}
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        View Project <OpenInNewOutlinedIcon />
      </PrimaryActionButton>
    );
  };

  render() {
    const { portfolioItem, tooltipOpen, translateY } = this.state;
    console.log(translateY);
    return (
      <Column style={{ ...appPreview, transform: `translate(0px, ${translateY}px)` }}>
        <Row>
          <Column>
            <Row alignItems="end">
              <Typography
                variant="h3"
                style={{
                  textAlign: "start",
                  fontWeight: 600,
                  fontSize: 43,
                  marginLeft: 38,
                  marginBottom: 15,
                  marginTop: 15
                }}
              >
                {portfolioItem?.title ?? ""}{" "}
              </Typography>
              <ClickAwayListener onClickAway={this.handleTooltipClose}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    marginBottom: 10
                  }}
                >
                  <Tooltip
                    PopperProps={{
                      disablePortal: true
                    }}
                    onClose={this.handleTooltipClose}
                    open={tooltipOpen}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    placement="right-start"
                    arrow
                    title={
                      <React.Fragment>
                        <Typography color="inherit" style={tooltipTitleStyle}>
                          Project Length:
                        </Typography>
                        <Typography
                          color="inherit"
                          style={{
                            fontSize: 20,
                            marginBottom: 20
                          }}
                        >
                          {portfolioItem.projectLength}
                        </Typography>
                        <Typography color="inherit" style={tooltipTitleStyle}>
                          Associated with:
                        </Typography>
                        <Typography
                          color="inherit"
                          style={{
                            fontSize: 20,
                            marginBottom: 20,
                            lineHeight: 1.2
                          }}
                        >
                          {portfolioItem.associatedWith}
                        </Typography>
                        <Typography
                          color="inherit"
                          style={{
                            fontSize: 18,
                            marginBottom: 10,
                            fontWeight: 300
                          }}
                        >
                          {portfolioItem.year}
                        </Typography>
                      </React.Fragment>
                    }
                  >
                    <IconButton
                      color="secondary"
                      onClick={this.handleTooltipOpen}
                    >
                      <InfoOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </ClickAwayListener>
            </Row>

            <div style={borderStyle} />
            <Column
              flex={1}
              style={{
                marginLeft: 38,
                width: "68%",
                marginBottom: 20
              }}
              justifyContent="center"
            >
              <Typography
              variant="h5"
                style={{
                  fontWeight: 300,
                  textAlign: "start",
                  marginTop: 10
                }}
              >
                {portfolioItem?.description ?? ""}
              </Typography>
            </Column>
          </Column>

          <Column
            justifyContent="center"
            style={{ marginRight: 50, marginTop: 60 }}
          >
            <img
              src={portfolioItem.imagePath}
              alt="app images"
              style={{ width: 340 }}
            />
          </Column>
        </Row>

        <Row
          wrap
          vertical="flex-start"
          alignContent="start"
          justifyContent="flex-start"
          alignItems="flex-end"
          style={{ marginLeft: 38 }}
        >
          {portfolioItem.tags.map(tag => {
            return <Tag title={tag} />;
          })}
        </Row>
        <Row
          justifyContent="center"
          alignItems="flex-end"
          style={{ paddingBottom: 20, paddingTop: 20 }}
          flex={1}
        >
          {portfolioItem.url ? this.renderLinkButton(portfolioItem.url) : ""}
        </Row>
      </Column>
    );
  }
}
