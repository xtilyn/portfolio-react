import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    border: 0,
    padding: "0 30px",
    verticalAlign: "middle",
    textDecoration: "none",
    display: "table",
    color: "#383838",
    textAlign: "center",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 5,
    paddingBottom: 5
  }
};

function PrimaryActionButton(props) {
  const { borderRadius, classes, children, className, endIcon, ...other } = props;

  return (
    <Button disableElevation={true} color='primary' className={clsx(classes.root, className)} {...other} style={{ borderRadius: borderRadius }} endIcon={endIcon}>
      {children || 'class names'}
    </Button>
  );
}

PrimaryActionButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(PrimaryActionButton);