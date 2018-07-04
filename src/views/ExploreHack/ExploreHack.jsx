import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
// @material-ui/icons
import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Whatshot from "@material-ui/icons/Whatshot";
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { Link } from "react-router-dom";
import { bugs, website, server } from "variables/general";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";

const GET_HACKATHONS = id => gql`
  {
  Hackathon(id: "${id}") {
    id, name, problemStatement, startTime, endTime, firstPrize, secondPrize, thirdPrize teams {
      name, teamScore members {
        score
      } solutions {
        demo, codeBaseURL, upvote, downvote
      }
    }
  }
}
`;

const ADD_SOLUTIONS = gql`
  mutation(
    $abstract: String!
    $codeBaseURL: String!
    $demo: String!
    $language: String!
    $presentation: String!
    $hackathonId: ID!
    $teamId: ID!
    $submittedAt: DateTime!
  ) {
    createSolution(
      abstract: $abstract
      codeBaseURL: $codeBaseURL
      demo: $demo
      downvote: 0
      language: $language
      presentation: $presentation
      score: 0
      submittedAt: $submittedAt
      upvote: 0
      hackathonId: $hackathonId
      teamId: $teamId
    ) {
      id
    }
  }

`;

class ExploreHack extends React.Component {
  constructor() {
    super();
    this.state = {
      formObject: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let formObject = this.state.formObject;
    formObject[event.target.name] = event.target.value;
    this.setState({ formObject });
  }
  state = {
    value: 0
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  processRows(data) {
    let rows = [];
    const idx = 1;
    rows.push(["1", data.firstPrize]);
    rows.push(["2", data.secondPrize]);
    rows.push(["3", data.thirdPrize]);
    return rows;
  }
  processTeams(data) {
    let teams = [];
    let scoretracker = [];
    data.teams.map(team => {
      teams.push([
        "1",
        team.name,
        team.teamScore,
        team.solutions ? team.solutions.demo : 0,
        team.solutions ? team.solutions.upvote : 0,
        team.solutions ? team.solutions.downvote : 0
      ]);
    });
    // for( var t=0; t < scoretracker.length; t++) {
    //   if(scoretracker[t][1] )
    // }
    // scoretracker.push([
    //   "1",
    //   team.name,
    //   team.teamScore,
    //   team.solutions.demo,
    //   team.solutions.upvote,
    //   team.solutions.downvote
    // ]);
    return teams;
  }
  renderEventContent(data) {
    if (!data) return;
    const { classes } = this.props;
    return [
      <div>
        <Grid container>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="success">
                <h4 className={classes.cardTitleWhite}>Hackathon</h4>
                <p className={classes.cardCategoryWhite}>{data.name}</p>
              </CardHeader>
              <CardBody>
                <Link to={`/participate/${data.id}`}>
                  <Button>Participate</Button>
                </Link>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <CustomTabs
              title="Hackathon :"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Problem Statement",
                  tabIcon: BugReport,
                  tabContent: (
                    <Card>
                      <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>
                          Problem Statement
                        </h4>
                        <p className={classes.cardCategoryWhite}>
                          By which portfolio
                        </p>
                      </CardHeader>
                      <CardBody>
                        <p>{data.problemStatement}</p>
                      </CardBody>
                    </Card>
                  )
                },
                {
                  tabName: "Leaderboard",
                  tabIcon: Cloud,
                  tabContent: (
                    <Card>
                      <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Leader board</h4>
                      </CardHeader>
                      <CardBody>
                        <Table
                          tableHeaderColor="warning"
                          tableHead={[
                            "Position",
                            "Name",
                            "Score",
                            "Demo Link",
                            "Upvote",
                            "Downvote"
                          ]}
                          tableData={this.processTeams(data)}
                        />
                      </CardBody>
                    </Card>
                  )
                },
                {
                  tabName: "Submissions",
                  tabIcon: Code,
                  tabContent: (
                    <Mutation mutation={ADD_SOLUTIONS}>
                      {(createSolution, { data }) => (<Card>
                      <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Submission</h4>
                      </CardHeader>
                      <CardBody>
                        <Grid container>
                          <GridItem xs={12} sm={12} md={12}>
                            <CustomInput
                              labelText="Abstract"
                              id="abstractExploreHack"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                multiline: true,
                                rows: 5,
                                value: this.state.formObject.abstract || "",
                                name: "abstract",
                                onChange: this.handleChange
                              }}
                            />
                          </GridItem>
                          <GridItem xs={3} sm={3} md={3}>
                            <CustomInput
                              labelText="Demo Link"
                              id="demoLinkExploreHack"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                value: this.state.formObject.demo || "",
                                name: "demo",
                                onChange: this.handleChange
                              }}
                            />
                          </GridItem>
                          <GridItem xs={3} sm={3} md={3}>
                            <CustomInput
                              labelText="Presentation Link"
                              id="presentationLinkExploreHack"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                value: this.state.formObject.presentation || "",
                                name: "presentation",
                                onChange: this.handleChange
                              }}
                            />
                          </GridItem>
                          <GridItem xs={3} sm={3} md={3}>
                            <CustomInput
                              labelText="Codebase URL"
                              id="codeBaseURLExploreHack"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                value: this.state.formObject.codeBaseURL || "",
                                name: "codeBaseURL",
                                onChange: this.handleChange
                              }}
                            />
                          </GridItem>
                          <GridItem xs={3} sm={3} md={3}>
                            <CustomInput
                              labelText="Langugage"
                              id="languageExploreHack"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                value: this.state.formObject.language || "",
                                name: "language",
                                onChange: this.handleChange
                              }}
                            />
                          </GridItem>
                        </Grid>                        
                      </CardBody>
                      <CardFooter>
                        <Button color="primary" onClick={()=>{
                          const team = localStorage.getItem("loginUser") ? JSON.parse(localStorage.getItem("loginUser")).team : "";
                          const id = team ? team.id : "";
                          let variables = JSON.parse(JSON.stringify(this.state.formObject));

                          variables.teamId = id;
                          variables.hackathonId = this.props.match.params.hackId;
                          variables.submittedAt = new Date();
                          createSolution({ variables })
                          this.setState({
                            formObject: {}
                          });
                        }}>Submit</Button>
                      </CardFooter>
                    </Card>
                    )}
                  </Mutation>
                  )
                },
                {
                  tabName: "Prizes",
                  tabIcon: Whatshot,
                  tabContent: (
                    <Card>
                      <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Leader board</h4>
                      </CardHeader>
                      <CardBody>
                        <Table
                          tableHeaderColor="warning"
                          tableHead={["Position", "Prize Amount"]}
                          tableData={this.processRows(data)}
                        />
                      </CardBody>
                    </Card>
                  )
                }
              ]}
            />
          </GridItem>
        </Grid>
      </div>
    ];
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Query query={GET_HACKATHONS(this.props.match.params.hackId)}>
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

            return this.renderEventContent(data.Hackathon);
          }}
        </Query>
      </div>
    );
  }
}

ExploreHack.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(ExploreHack);
