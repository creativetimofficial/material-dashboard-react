import React from "react";
import { withStyles } from "material-ui";
import PropTypes from "prop-types";

import typographyStyle from "assets/jss/material-dashboard-react/typographyStyle.jsx";

function A({ ...props }) {
  const { classes, children, ...rest } = props;
  return (
    <a {...rest} className={classes.defaultFontStyle + " " + classes.aStyle}>
      {children}
    </a>
  );
}

A.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(A);
