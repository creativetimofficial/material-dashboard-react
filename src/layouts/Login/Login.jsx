import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import avatar from "assets/img/faces/marc.jpg";
import { gql } from "apollo-boost";
import { Query, Mutation } from "react-apollo";
import Dashboard from "layouts/Dashboard/Dashboard.jsx";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const initialState = {};
const ADD_EVENT = gql`
  mutation($name: String!, $memberIds: [ID!]) {
    createTeam(badges: BronzeMember, name: $name, membersIds: $memberIds) {
      id
    }
  }
`;

const GET_MEMBERS = (email) => gql`
  {
    allMembers(filter: {
      email: "${email}"
    }) {
      id, userName, email, badges, team {
        id
      }
    }
  }
`;

class TeamInputs extends React.Component {
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

  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Hackesia Hacks</h4>
              <p className={classes.cardCategoryWhite}>Login</p>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email"
                    id="Email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: this.state.formObject.email || "",
                      name: "email",
                      onChange: this.handleChange
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="Password"
                    type="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: this.state.formObject.password || "",
                      name: "password",
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
              </Grid>
            </CardBody>
            <CardFooter>
              <Link to={`/hack-dashboard`}>
                <Button color="primary">
                  Login
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <div>
            <Mutation mutation={ADD_EVENT}>
              {(addTeam, { data }) => (
                <Query query={GET_MEMBERS(this.state.formObject.email)} pollInterval={500}>
                  {({ loading, error, data }) => {
                    if (loading) return false
                    if (error) return <div>Error : {error}</div>;
                    localStorage.setItem("loginUser", JSON.stringify(data.allMembers[0]));
                    return false;
                  }}
                </Query>
              )}
            </Mutation>
          </div>
        </GridItem>
      </Grid>
    );
  }
}

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <TeamInputs
        classes={classes}
      />
    );
  }
}

export default withStyles(styles)(Login);
