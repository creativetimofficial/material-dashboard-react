import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/marc.jpg";
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

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
  mutation($endTime: DateTime!, $startTime: DateTime!, $name: String!, $organization: Organization!, 
    $firstPrize:String, $secondPrize:String, $thirdPrize:String, $problemStatement: String!, $languages:String!) {
    createHackathon(
      languages: $languages
      name:$name
      organization: $organization
      firstPrize: $firstPrize
      secondPrize: $secondPrize
      thirdPrize: $thirdPrize
      startTime: $startTime
      endTime:$endTime
      problemStatement: $problemStatement
      type: "",
      status:"Upcoming"
    ){
      id
    }
  }
`
class AddEvent extends React.Component {
  constructor(){
    super();
    this.state = {
      formObject: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let formObject = this.state.formObject;
    formObject[event.target.name] = event.target.value
    this.setState({formObject})
  }
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Mutation mutation={ADD_EVENT}>
          {(createHackathon, { data }) => (
            <Grid container>
              <GridItem xs={12} sm={12} md={8}>
                <Card>
                  <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Add Event</h4>
                    <p className={classes.cardCategoryWhite}>Enter the details of the event</p>
                  </CardHeader>
                  <CardBody>
                    <Grid container>
                      <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                          labelText="Hackathon Name"
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
                      <GridItem xs={12} sm={12} md={6}>
                        <InputLabel>Start Date</InputLabel>
                        <CustomInput
                          labelText=""
                          id="startTime"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "date",
                            value: this.state.formObject.startTime || "",
                            name: "startTime",
                            onChange: this.handleChange
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <InputLabel>End Date</InputLabel>
                        <CustomInput
                          labelText=""
                          id="endTime"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "date",
                            value: this.state.formObject.endTime || "",
                            name: "endTime",
                            onChange: this.handleChange
                          }}
                        />
                      </GridItem>
                      <GridItem xs={4} sm={4} md={4}>
                        <CustomInput
                          labelText="First Prize"
                          id="firstPrize"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            value: this.state.formObject.firstPrize || "",
                            name: "firstPrize",
                            onChange: this.handleChange
                          }}
                        />
                      </GridItem>
                      <GridItem xs={4} sm={4} md={4}>
                        <CustomInput
                          labelText="Second Prize"
                          id="secondPrize"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            value: this.state.formObject.secondPrize || "",
                            name: "secondPrize",
                            onChange: this.handleChange
                          }}
                        />
                      </GridItem>
                      <GridItem xs={4} sm={4} md={4}>
                        <CustomInput
                          labelText="Third Prize"
                          id="thirdPrize"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            value: this.state.formObject.thirdPrize || "",
                            name: "thirdPrize",
                            onChange: this.handleChange
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                          labelText="Organization"
                          id="organization"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            value: this.state.formObject.organization || "",
                            name: "organization",
                            onChange: this.handleChange
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                          labelText="Languages"
                          id="languages"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            value: this.state.formObject.languages || "",
                            name: "languages",
                            onChange: this.handleChange
                          }}
                        />
                      </GridItem>
                    </Grid>
                    <Grid container>
                      <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                          labelText="Enter the problem statement"
                          id="problemStatement"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 5,
                            value: this.state.formObject.problemStatement || "",
                            name: "problemStatement",
                            onChange: this.handleChange
                          }}
                        />
                      </GridItem>
                    </Grid>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary" onClick={()=>{
                      createHackathon({variables: this.state.formObject})
                      this.setState({
                        formObject: {}
                      });
                    }}>Create Event</Button>
                  </CardFooter>
                </Card>
              </GridItem>
            </Grid>
          )}
        </Mutation>
        
      </div>
    );
  }
}

export default withStyles(styles)(AddEvent);
