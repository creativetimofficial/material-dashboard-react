import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";

import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";

function Icons({ ...props }) {
  return (
    <Grid container>
      <GridItem xs={12} sm={12} md={12}>
        <RegularCard
          plainCard
          cardTitle="Material Design Icons"
          cardSubtitle={
            <p>
              Handcrafted by our friends from{" "}
              <a
                href="https://design.google.com/icons/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>
            </p>
          }
          content={
            <div>
              <Hidden only={["sm", "xs"]}>
                <iframe
                  className={props.classes.iframe}
                  src="https://material.io/icons/"
                  title="Icons iframe"
                >
                  <p>Your browser does not support iframes.</p>
                </iframe>
              </Hidden>
              <Hidden only={["lg", "md"]}>
                <GridItem xs={12} sm={12} md={6}>
                  <h5>
                    The icons are visible on Desktop mode inside an iframe.
                    Since the iframe is not working on Mobile and Tablets please
                    visit the icons on their original page on Google. Check the
                    <a
                      href="https://design.google.com/icons/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Material Icons
                    </a>
                  </h5>
                </GridItem>
              </Hidden>
            </div>
          }
        />
      </GridItem>
    </Grid>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
