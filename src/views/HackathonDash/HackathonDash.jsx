import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Event from "@material-ui/icons/Event";
import Warning from "@material-ui/icons/Warning";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import Danger from "components/Typography/Danger.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { dashboard } from "variables/dashboard";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_HACKATHONS = gql`
  {
    allHackathons {
      id
      name
      problemStatement
      status
      languages
    }
  }
`;
// startTime, endTime, organization,
class Dashboard extends React.Component {
  state = {
    value: 0,
    hackathonData: {}
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  renderCards(hackathonData) {
    const { classes } = this.props;
    const cards = dashboard.map(event => {
      let tableData = hackathonData[event.type] || [];
      let tableHead = Object.values(event.tableHeaders) || [];
      tableHead.push("Action");
      return (
        <GridItem
          xs={event.styles.xs}
          sm={event.styles.sm}
          md={event.styles.md}
        >
          <Card>
            <CardHeader color={event.cardColor}>
              <h4 className={classes.cardTitleWhite}>{event.title}</h4>
              <p className={classes.cardCategoryWhite}>{event.subtitle}</p>
            </CardHeader>
            <CardBody>
              <Grid container>
                {tableData.map(function (object, i) {
                  return [
                    <GridItem xs={12} sm={12} md={4}>
                      <Card>
                        <CardHeader color="primary" stats icon>
                          <CardIcon color="primary">
                            <Event />
                          </CardIcon>
                          <p className={classes.cardCategory}>{object[4]}</p>
                          <h3 className={classes.cardTitle}>{object[1]}</h3>
                        </CardHeader>
                        <CardFooter stats>
                          <div className={classes.stats}>
                            <Link to={`/hackathon/${object[0]}`}>View</Link>
                          </div>
                          <div className={classes.stats}>
                            <Link to={`/event-dash/${object[0]}`}>
                              Admin View
                            </Link>
                          </div>
                        </CardFooter>
                      </Card>
                    </GridItem>
                  ];
                })}
              </Grid>
            </CardBody>
          </Card>
        </GridItem>
      );
    });
    return cards;
  }

  processRow(hackRow) {
    let requiredKeys = ["id", "name", "problemStatement"];
    let filteredRow = [];
    Object.keys(hackRow).map(key => {
      if (requiredKeys.indexOf(key) !== -1) filteredRow.push(hackRow[key]);
    });
    return filteredRow;
  }

  processOptions(hackathons) {
    let hackathonData = {};
    hackathons.map(hackathon => {
      if (!hackathonData[hackathon.status])
        hackathonData[hackathon.status] = [];
      hackathonData[hackathon.status].push(this.processRow(hackathon));
    });
    console.log(hackathonData);
    return this.renderCards(hackathonData);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <Query query={GET_HACKATHONS}>
            {({ loading, error, data }) => {
              if (loading)
                return (
                  <GridItem xs={12} md={12} sm={12}>
                    <Card>
                      <CardHeader color={"info"}>
                        <h4 className={classes.cardTitleWhite}>Loading...</h4>
                      </CardHeader>
                      <CardBody>
                        <h4>Please wait while we load the events</h4>
                      </CardBody>
                    </Card>
                  </GridItem>
                );
              if (error) return <div>Error :</div>;

              return this.processOptions(data.allHackathons);
            }}
          </Query>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired
};

Dashboard.defaultProps = {
  events: []
};
export default withStyles(dashboardStyle)(Dashboard);
