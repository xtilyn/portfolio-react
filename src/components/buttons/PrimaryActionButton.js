import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    border: 0,
    width: "320px",
    height: "60px",
    padding: "0 30px",
    verticalAlign: "middle",
    marginTop: 20,
    textDecoration: "none",
    display: "table",
    color: "#383838",
    textAlign: "center"
  }
};

function PrimaryActionButton(props) {
  const { borderRadius, classes, children, className, ...other } = props;

  return (
    <Button disableElevation={true} color='primary' className={clsx(classes.root, className)} {...other} style={{ borderRadius: borderRadius }}>
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