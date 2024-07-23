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
import DataTable from "examples/Tables/DataTable";

// Data
import assessmentsTableData from "layouts/course/data/assessmentTableData";

function Assessments() {
  const { course, term } = useParams();

  // can only handle one of these call for some reason
  const { columns, rows } = assessmentsTableData({ course, term });

  console.log("Print Assessments data");
  console.log({ columns, rows });

  return (
    <Grid item xs={12}>
      <Card>
        <MDBox
          mx={2}
          mt={-3}
          py={3}
          px={2}
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
        >
          <MDTypography variant="h6" color="white">
            {"Assessments"}
          </MDTypography>
        </MDBox>
        <MDBox pt={3}>
          <DataTable
            table={{ columns, rows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />
        </MDBox>
      </Card>
    </Grid>
  );
}

export default Assessments;
