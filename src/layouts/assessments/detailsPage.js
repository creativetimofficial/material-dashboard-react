// react
import React from "react";
import { useParams } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import Details from "./data/details";
import Prodamark from "./data/prodamark";

function AssessmentDetails() {
  const { course, term, assessment } = useParams();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Details course={course} term={term} assessment={assessment} />
          </Grid>
          <Grid item xs={12}>
            <Prodamark course={course} term={term} assessment={assessment} />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default AssessmentDetails;
