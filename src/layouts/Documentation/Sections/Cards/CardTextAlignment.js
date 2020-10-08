import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import { cardTitle } from "assets/jss/material-dashboard-react.js";

const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
};

const useStyles = makeStyles(styles);

export default function CardsImages() {
  const classes = useStyles();
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
