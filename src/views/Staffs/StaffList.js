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

export default function StaffList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Staff</h4>
            <p className={classes.cardCategoryWhite}>
              Staff in all branch of store
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Branch", "Role", "Salary", "Action"]}
              tableData={[
                ["1", "G-Dragon", "Minh Khai", "Admin", "$10000"],
                ["2", "JiSoo", "Cau Giay", "Manager", "$10000"],
                ["3", "Top", "Me Tri", "Operator", "$10000"],
                ["4", "Rose", "Minh Khai", "Staff", "$10000"],
                ["5", "IU", "Minh Khai", "Staff", "$10000"],
                ["6", "Teayang", "Minh Khai", "Admin", "$10000"]
              ]}
              tablePagination={true}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
