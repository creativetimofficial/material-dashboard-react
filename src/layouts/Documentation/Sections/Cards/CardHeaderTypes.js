/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// material-ui
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Language from "@material-ui/icons/Language";
// core components
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

var styles = {
  ...dashboardStyle,
  cardTitle: {
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function CardHeaderTypes({ ...props }) {
  const { classes } = props;
  return (
    <div>
      <Grid container>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader>
              <h4 className={classes.cardTitle}>Regular header</h4>
              <p>Category subtitle</p>
            </CardHeader>
            <CardBody>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona...
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitle}>Full header coloured</h4>
              <p>Category subtitle</p>
            </CardHeader>
            <CardBody>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona...
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Language />
              </CardIcon>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Here is the Icon</h4>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona...
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(CardHeaderTypes);
