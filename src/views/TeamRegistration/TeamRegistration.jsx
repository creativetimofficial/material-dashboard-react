import React from "react";
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
import MenuItem from '@material-ui/core/MenuItem';
import avatar from "assets/img/faces/marc.jpg";
import { gql } from 'apollo-boost';
import { Query, Mutation } from 'react-apollo';

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
  mutation($name: String!, $memberIds: [ID!], $hackathonsIds: [ID!]) {
    createTeam(
      badges: BronzeMember
      name: $name
      membersIds: $memberIds
      hackathonsIds: $hackathonsIds
    ) {
      id
    }
  }

`

const GET_MEMBERS = gql`
  {
    allMembers{
      userName, id
    }
  }
`

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
    formObject[event.target.name] = event.target.value
    this.setState({ formObject })
  }

  render(){
    const { classes } = this.props;
    return <Grid container>
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Add Team</h4>
            <p className={classes.cardCategoryWhite}>Enter the details of the team</p>
          </CardHeader>
          <CardBody>
            <Grid container>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Team Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    value: this.state.formObject.name || "",
                    name: "name",
                    onChange: this.handleChange
                  }}
                />
              </GridItem>
              {Array(4).fill(0).map((a, i) => {
                let key = `teamMember${i}`;
                return <GridItem xs={12} sm={12} md={6}>
                  <FormControl fullWidth={true}>
                    <InputLabel htmlFor={key}>Team Member {i + 1}</InputLabel>
                    <Select
                      value={this.state.formObject[key] || ""}
                      name={key}
                      onChange={this.handleChange}
                    >
                      {this.props.data.map(user => <MenuItem value={user.id}>{user.userName}</MenuItem>)}
                    </Select>
                  </FormControl>
                </GridItem>
              })}
              
            </Grid>
          </CardBody>
          <CardFooter>
            <Button color="primary" onClick={() => {
              this.props.addTeam({ variables: {
                name: this.state.formObject.name,
                memberIds: Array(4).fill(0).map((a, i) => this.state.formObject[`teamMember${i}`]),
                hackathonsIds: this.props.hackId
              }})
              this.setState({
                formObject: {}
              })
            }}>Add Team</Button>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  }
}

class AddEvent extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Mutation mutation={ADD_EVENT}>
          {(addTeam, { mutData }) => (
            <Query query={GET_MEMBERS} pollInterval={500}>
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
                if (error) return <div>Error : {error}</div>;
                console.log("***", mutData);
                return <TeamInputs addTeam={addTeam} classes={classes} data={data.allMembers}
                  hackId={this.props.match.params.hackId} />
              }}
            </Query>
          )}
        </Mutation>

      </div>
    );
  }
}

export default withStyles(styles)(AddEvent);
