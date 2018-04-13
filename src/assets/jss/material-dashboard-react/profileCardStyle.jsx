// ##############################
// // // ProfileCard styles
// #############################

import { card, boxShadow, grayColor, defaultFont } from "assets/jss/material-dashboard-react.jsx";

const profileCardStyle = {
  card: {
    marginTop: "30px",
    textAlign: "center",
    ...card
  },
  cardHeader: {
    display: "inline-block",
    width: "100%",
    padding: "0px"
  },
  cardAvatar: {
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "-50px auto 0",
    borderRadius: "50%",
    overflow: "hidden",
    ...boxShadow
  },
  img: {
    width: "100%",
    height: "auto",
    verticalAlign: "middle",
    border: "0"
  },
  textAlign: {
    textAlign: "center"
  },
  cardSubtitle: {
    color: grayColor,
    ...defaultFont,
    fontSize: "1em",
    textTransform: "uppercase",
    marginTop: "10px",
    marginBottom: "10px"
  },
  cardTitle: {
    ...defaultFont,
    fontSize: "1.3em",
    marginTop: "10px",
    marginBottom: "10px"
  },
  cardDescription: {
    ...defaultFont,
    padding: "15px 20px",
    margin: "0 0 10px"
  },
  cardActions: {
    height: "auto",
    display: "inline"
  }
};

export default profileCardStyle;
