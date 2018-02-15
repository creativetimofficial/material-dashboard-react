import React from "react";
import { withStyles, Grid } from "material-ui";

const style = {
  grid: {
    padding: "0 15px !important"
  }
};

function ItemGrid({ ...props }) {
  const { classes, children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(ItemGrid);
