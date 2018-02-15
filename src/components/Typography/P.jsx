import React from "react";
import { withStyles } from "material-ui";
import PropTypes from "prop-types";

import typographyStyle from "variables/styles/typographyStyle.jsx";

function P({ ...props }) {
  const { classes, children } = props;
  return (
    <p className={classes.defaultFontStyle + " " + classes.pStyle}>
      {children}
    </p>
  );
}

P.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(P);
