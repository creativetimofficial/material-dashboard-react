import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const styles={
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

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <h1>Home</h1>
      <h4 className={classes.cardTitleWhite}>Welcom on my home page.</h4>
    </div>
  )};