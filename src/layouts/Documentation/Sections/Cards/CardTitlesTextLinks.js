import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Muted from "components/Typography/Muted.js";

import {
  cardTitle,
  cardSubtitle,
  cardLink,
} from "assets/jss/material-dashboard-react.js";

const styles = {
  cardTitle,
  cardSubtitle,
  cardLink,
};

const useStyles = makeStyles(styles);

export default function CardTitlesTextLinks() {
  const classes = useStyles();
  return (
    <Card style={{ width: "20rem" }}>
      <CardBody>
        <h4 className={classes.cardTitle}>Card title</h4>
        <Muted>
          <h6 className={classes.cardSubtitle}>Card subtitle</h6>
        </Muted>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          href="#pablo"
          className={classes.cardLink}
          onClick={(e) => e.preventDefault()}
        >
          Card link
        </a>
        <a
          href="#pablo"
          className={classes.cardLink}
          onClick={(e) => e.preventDefault()}
        >
          Another link
        </a>
      </CardBody>
    </Card>
  );
}
