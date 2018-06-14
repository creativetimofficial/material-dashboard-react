import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Muted from "components/Typography/Muted.jsx";

import {
  cardTitle,
  cardSubtitle,
  cardLink
} from "assets/jss/material-dashboard-react.jsx";

const styles = {
  cardTitle,
  cardSubtitle,
  cardLink
};

class CardTitlesTextLinks extends React.Component {
  render() {
    const { classes } = this.props;
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
            onClick={e => e.preventDefault()}
          >
            Card link
          </a>
          <a
            href="#pablo"
            className={classes.cardLink}
            onClick={e => e.preventDefault()}
          >
            Another link
          </a>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(CardTitlesTextLinks);
