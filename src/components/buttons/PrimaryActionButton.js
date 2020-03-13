import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    borderRadius: 10,
    border: 0,
    width: "320px",
    height: "60px",
    padding: "0 30px",
    verticalAlign: "middle",
    marginTop: 20,
    textDecoration: "none",
    display: 'table',
    color: '#383838'
  },
};

function PrimaryActionButton(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button disableElevation={true} color='primary' className={clsx(classes.root, className)} {...other}>
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