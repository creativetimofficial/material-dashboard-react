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
import Table from "components/Table/Table.jsx";
import avatar from "assets/img/faces/marc.jpg";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

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

const badgeURLS = [
  "https://images.vexels.com/media/users/3/137458/isolated/preview/e8670e0313b4445e0365b106ad570c6b-cinta-de-etiqueta-de-placa-plana-by-vexels.png",
  "https://cdn1.iconfinder.com/data/icons/sports-badges/32/badge-star-2-512.png",
  "https://www.iconfinder.com/icons/246707/award_cup_heart_trophey_trophy_winner_winning_icon"
]

const GET_MEMBERS = (email) => gql`
   {
    allMembers(filter: {
      email: "${email}"
    }) {
      id, userName, email, badges, level
    }
  }
`;

function UserProfile(props) {
  const { classes } = props;
  const email = localStorage.getItem("loginUser") ? JSON.parse(localStorage.getItem("loginUser")).email : "";

  return (
    <div>
      <Query query={GET_MEMBERS(email)} pollInterval={500}>
        {({ loading, error, data }) => {
          if (loading) return <Card profile><CardBody>Loading</CardBody></Card>
          if (error) return false;
          const User = data.allMembers ? data.allMembers[0] : {};
          return <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar><CardBody profile>
              <h6 className={classes.cardCategory}>User Profile</h6>
              <h4 className={classes.cardTitle}>
                {User.email}
              </h4>
              <h5 className={classes.cardTitle}>
                Level : {User.level}
              </h5>
              {User.badges.map((badge, idx) => {
                return <div className="badge">
                  <img width={"75px"} height={"75px"} src={badgeURLS[idx]} alt="..." />
                  <span style={{ textAlign: "center" }}>{badge}</span>
                </div>
              })}
              <Button color="primary" round>
                View Details
              </Button>
            </CardBody>
          </Card>
        }}
      </Query>
    </div>
  );
}

export default withStyles(styles)(UserProfile);
