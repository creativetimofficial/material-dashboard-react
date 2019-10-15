import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function StoreList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Stores Table</h4>
            <p className={classes.cardCategoryWhite}>
              All Stores in System
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Store", "City", "Branches", "Employees", "Status", "Action"]}
              tableData={[
                ["1", "Bleu Bird", "Hanoi", "1", "10", "Try"],
                ["2", "Aha Coffee", "Hanoi", "10", "100", "Active"],
                ["3", "Naked By V", "Hanoi", "5", "50", "In-active"],
                ["4", "Milano Coffee", "Haiphong", "10", "70", "Expiring Soon" ],
                ["5", "Kenh14", "Danang", "1", "5", "Try"],
                ["6", "Kafa", "Hanoi", "1", "10", "Try"],
                ["7", "Veo by K", "Hanoi", "10", "100", "Active"],
                ["8", "Addidas", "Hanoi", "5", "50", "In-active"],
                ["9", "1980s", "Haiphong", "10", "70", "Expiring Soon" ],
                ["10", "Vnexpress", "Danang", "1", "5", "Try"]
              ]}
              tablePagination={true}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
