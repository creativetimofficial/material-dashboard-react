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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// core components
// section of this page
import CardBasic from "./Cards/CardBasic.js";
import CardBodyExample from "./Cards/CardBodyExample.js";
import CardTitlesTextLinks from "./Cards/CardTitlesTextLinks.js";
import CardsImages from "./Cards/CardsImages.js";
import CardChart from "./Cards/CardChart.js";
import CardHeaderTypes from "./Cards/CardHeaderTypes.js";
import CardTextAlignment from "./Cards/CardTextAlignment.js";

// examples
const codeCardBasic = `import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/cardImagesStyles.js";

const useStyles = makeStyles(styles);

export default function CardBasic() {
  const classes = useStyles();
  return (
    <Card style={{ width: "20rem" }}>
      <img
        className={classes.cardImgTop}
        data-src="holder.js/100px180/"
        alt="100%x180"
        style={{ height: "180px", width: "100%", display: "block" }}
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        data-holder-rendered="true"
      />
      <CardBody>
        <h4>Card title</h4>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button color="primary">Go somewhere</Button>
      </CardBody>
    </Card>
  );
}`;

const codeCardBodyExample = `import React from "react";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

export default function CardBodyExample() {
  return (
    <Card>
      <CardBody>This is some text within a card body.</CardBody>
    </Card>
  );
}`;

const codeCardTitlesTextLinks = `import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Muted from "components/Typography/Muted.js";

import {
  cardTitle,
  cardSubtitle,
  cardLink
} from "assets/jss/material-dashboard-react.js";

const styles = {
  cardTitle,
  cardSubtitle,
  cardLink
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
`;

const codeCardsImages = `import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import cardImagesStyles from "assets/jss/material-dashboard-react/cardImagesStyles.js";

const styles = {
  ...cardImagesStyles,
  textWhite: {
    "&, & *": {
      color: "#FFF"
    }
  }
};

const useStyles = makeStyles(styles);

export default function CardsImages() {
  const classes = useStyles();
  return (
    <div>
      <Card style={{ width: "20rem" }}>
        <img
          className={classes.cardImgTop}
          data-src="holder.js/100px180/"
          alt="100%x180"
          style={{ height: "180px", width: "100%", display: "block" }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
        <CardBody>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button color="primary">Go somewhere</Button>
        </CardBody>
      </Card>
      <br />
      <Card style={{ width: "20rem" }}>
        <CardBody>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </CardBody>
        <img
          className={classes.cardImgBottom}
          data-src="holder.js/100px180/"
          alt="100%x180"
          style={{ height: "180px", width: "100%", display: "block" }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
      </Card>
      <br />
      <Card className={classes.textWhite}>
        <div className={classes.cardImgOverlay}>
          <h4>Card title</h4>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p>Last updated 3 mins ago</p>
        </div>
        <img
          className={classes.cardImg}
          data-src="holder.js/100px270/#55595c:#373a3c/text:Card image"
          alt="100%x270"
          style={{ height: "270px", width: "100%", display: "block" }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df50ef51%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df50ef51%22%3E%3Crect%20width%3D%22843%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22154.35%22%3E843x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
      </Card>
    </div>
  );
}`;

const codeCardHeaderTypes = `import React from "react";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles(styles);

export default function CardHeaderTypes() {
  const classes = useStyles();
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
}`;

const codeCardChart = `import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";

// core components
import GridItem from "components/Grid/GridItem.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { emailsSubscriptionChart, completedTasksChart } from "variables/charts";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function CardChart() {
  const classes = useStyles();
  return (
    <Grid container>
      <GridItem xs={12} sm={12} md={6}>
        <Card chart>
          <CardHeader color="warning">
            <ChartistGraph
              className="ct-chart"
              data={emailsSubscriptionChart.data}
              type="Bar"
              options={emailsSubscriptionChart.options}
              responsiveOptions={emailsSubscriptionChart.responsiveOptions}
              listener={emailsSubscriptionChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Email Subscriptions</h4>
            <p className={classes.cardCategory}>Last Campaign Performance</p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> campaign sent 2 days ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Card chart>
          <CardHeader color="danger">
            <ChartistGraph
              className="ct-chart"
              data={completedTasksChart.data}
              type="Line"
              options={completedTasksChart.options}
              listener={completedTasksChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Completed Tasks</h4>
            <p className={classes.cardCategory}>Last Campaign Performance</p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> campaign sent 2 days ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  );
}`;

const codeCardTextAlignment = `import React from "react";
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
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  }
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
`;

// props
const codeProps = `Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool
};

CardAvatar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  profile: PropTypes.bool,
  plain: PropTypes.bool
};

CardBody.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool
};

CardFooter.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  stats: PropTypes.bool,
  chart: PropTypes.bool
};

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  plain: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool
};

CardIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ])
};`;

function Cards({ ...props }) {
  return (
    <div>
      <h1>Cards</h1>
      <p>
        Our cards provide a flexible and extensible content container with
        multiple variants and options.
      </p>
      <p>
        If you want to use the cards on white background you can remove it’s
        shadow using the property <code>plain</code> on the card components (see
        Props bellow).
      </p>
      <h2>Styles</h2>
      <p>The styles for these components can be found in</p>
      <br />
      <ul>
        <li>
          src/assets/jss/material-dashboard-react/components/cardAvatarStyle.js
          <ul>
            <li>
              <code>src/components/Card/CardAvatar.js</code>
            </li>
          </ul>
        </li>
        <li>
          src/assets/jss/material-dashboard-react/components/cardBodyStyle.js
          <ul>
            <li>
              <code>src/components/Card/CardBody.js</code>
            </li>
          </ul>
        </li>
        <li>
          src/assets/jss/material-dashboard-react/components/cardFooterStyle.js
          <ul>
            <li>
              <code>src/components/Card/CardFooter.js</code>
            </li>
          </ul>
        </li>
        <li>
          src/assets/jss/material-dashboard-react/components/cardHeaderStyle.js
          <ul>
            <li>
              <code>src/components/Card/CardHeader.js</code>
            </li>
          </ul>
        </li>
        <li>
          src/assets/jss/material-dashboard-react/components/cardIconStyle.js
          <ul>
            <li>
              <code>src/components/Card/CardIcon.js</code>
            </li>
          </ul>
        </li>
        <li>
          src/assets/jss/material-dashboard-react/components/cardStyle.js
          <ul>
            <li>
              <code>src/components/Card/Card.js</code>
            </li>
          </ul>
        </li>
      </ul>
      <h2>Examples</h2>
      <p>
        Below is an example of a basic card with mixed content and a fixed
        width. Cards have no fixed width to start, so they’ll naturally fill the
        full width of its parent element.
      </p>
      <CardBasic />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeCardBasic}
      </SyntaxHighlighter>
      <h2>Content Types</h2>
      <h3>CardBody</h3>
      <p>
        The building block of a <code>Card</code> is the <code>CardBody</code>.
        Use it whenever you need a padded section within a card.
      </p>
      <CardBodyExample />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeCardBodyExample}
      </SyntaxHighlighter>
      <h3>Titles, text, and links</h3>
      <p>
        Card titles are used by adding <code>classes.cardTitle</code> to a{" "}
        <code>{`<h*>`}</code> tag. In the same way, links are added and placed
        next to each other by adding <code>classes.cardLink</code> to an{" "}
        <code>{`<a>`}</code> tag.
      </p>
      <p>
        Subtitles are used by adding a <code>classes.cardSubtitle</code> to a{" "}
        <code>{`<h*>`}</code> tag. If the <code>classes.cardTitle</code> and the{" "}
        <code>classes.cardSubtitle</code> items are placed in a{" "}
        <code>CardBody</code> item, the card title and subtitle are aligned
        nicely.
      </p>
      <CardTitlesTextLinks />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeCardTitlesTextLinks}
      </SyntaxHighlighter>
      <h3>Images</h3>
      <p>
        <code>classes.cardImgTop</code> places an image to the top of the card.
      </p>
      <p>
        <code>classes.cardImgBototm</code> places an image to the top of the
        card.
      </p>
      <CardsImages />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeCardsImages}
      </SyntaxHighlighter>
      <h3>CardHeader types</h3>
      <CardHeaderTypes />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeCardHeaderTypes}
      </SyntaxHighlighter>
      <h3>Cards with Charts in them</h3>
      <CardChart />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeCardChart}
      </SyntaxHighlighter>
      <h2>Text alignment</h2>
      <p>
        You can quickly change the text alignment of any card—in its entirety or
        specific parts—with our text align classes.
      </p>
      <CardTextAlignment />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeCardTextAlignment}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}

export default Cards;
