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
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import { cardTitle } from "assets/jss/material-dashboard-react.js";

const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  }
};

class CardsImages extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>Special title treatment</h4>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button color="primary">Go somewhere</Button>
          </CardBody>
        </Card>
        <Card className={classes.textCenter} style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>Special title treatment</h4>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button color="primary">Go somewhere</Button>
          </CardBody>
        </Card>
        <Card className={classes.textRight} style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>Special title treatment</h4>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button color="primary">Go somewhere</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CardsImages);
