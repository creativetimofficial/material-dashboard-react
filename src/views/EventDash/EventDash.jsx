import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import Accessibility from "@material-ui/icons/Accessibility";
import CheckCircle from "@material-ui/icons/CheckCircle";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_HACKATHONS = (id) => gql`
  {
    Hackathon(id: "${id}") {
      id, name, problemStatement, teams {
        name, members {
          userName
        }, solutions {
          upvote, downvote, score
        }
      }, status
    }
  }
`

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  processTableData(teams){
    return teams.map(team => {
      let row = [];
      row.push(team.name);
      row.push(team.solutions ? team.solutions.score : 0);
      row.push(team.members.map(member => member.userName).join("\n"));
      row.push(team.solutions ? team.solutions.upvote : 0);
      row.push(team.solutions ? team.solutions.downvote : 0);
      return row;
    })
  }

  renderEventContent(data){
    if (!data ) return;
    const { classes } = this.props;
    return [<Grid container>
      <GridItem xs={12} sm={6} md={4}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="info">
              <Accessibility />
            </CardIcon>
            <p className={classes.cardCategory}>No of Teams</p>
            <h3 className={classes.cardTitle}>
              {data.teams ? data.teams.length : 0}
            </h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={4}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="success">
              <Accessibility />
            </CardIcon>
            <p className={classes.cardCategory}>No of Participants</p>
            <h3 className={classes.cardTitle}>
              {data.teams.reduce((a, o) => a += o.members.length, 0)}
            </h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={4}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <CheckCircle />
            </CardIcon>
            <p className={classes.cardCategory}>No of Solutions</p>
            <h3 className={classes.cardTitle}>
              {data.teams.solutions ? data.teams.solutions.length : 0}
            </h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>, 
    <Grid container>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>Leaderboard</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="danger"
              tableHead={["Team Name", "Score", "Team Members", "Upvotes", "Downvotes"]}
              tableData={this.processTableData(data.teams)}
            />
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
    ]
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.match.params.eventId ? <Query query={GET_HACKATHONS(this.props.match.params.eventId)}>
          {({ loading, error, data }) => {
            if (loading) return <GridItem xs={12} md={12} sm={12}>
              <Card>
                <CardHeader color={"info"}>
                  <h4 className={classes.cardTitleWhite}>Loading...</h4>
                </CardHeader>
                <CardBody>
                  <h4>Please wait while we load the events</h4>
                </CardBody>
              </Card>
            </GridItem>;
            if (error) return <div>Error :</div>;

            return this.renderEventContent(data.Hackathon);
          }}
        </Query> : false }
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
