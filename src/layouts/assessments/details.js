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
import assessmentTableData from "layouts/assessments/data/assessmentTableData";

function AssessmentDetails() {
  const { course, term, assessment } = useParams();
  const [details, setDetails] = React.useState({
    name: "Loading...",
    astra_name: "Loading...",
    weigh: 0,
    deadline: "Loading...",
    late_penalty: 0,
    cutoff: "Loading...",
    min_mark: 0,
    max_mark: 100,
    formula_mark: null,
  });

  React.useEffect(() => {
    const fetchResults = async () => {
      const url = `http://localhost:3000/${course}/${term}/${assessment}/details`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "content-Type": "application/json",
        },
      });
      const resBody = await res.json();
      console.log(resBody);
      setDetails(resBody.assessment);
    };

    fetchResults();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
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
                  {course + " " + term + " - " + assessment}
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <MDTypography variant="h6">Astra Name:</MDTypography>
                    <MDTypography variant="body2">{details.astra_name}</MDTypography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MDTypography variant="body1">Name:</MDTypography>
                    <MDTypography variant="body2">{details.name}</MDTypography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MDTypography variant="body1">Cutoff:</MDTypography>
                    <MDTypography variant="body2">{details.cutoff}</MDTypography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MDTypography variant="body1">Deadline:</MDTypography>
                    <MDTypography variant="body2">{details.deadline}</MDTypography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MDTypography variant="body1">Max Mark:</MDTypography>
                    <MDTypography variant="body2">{details.max_mark}</MDTypography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MDTypography variant="body1">Min Mark:</MDTypography>
                    <MDTypography variant="body2">{details.min_mark}</MDTypography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MDTypography variant="body1">Weight:</MDTypography>
                    <MDTypography variant="body2">{details.weigh}</MDTypography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MDTypography variant="body1">Late Penalty:</MDTypography>
                    <MDTypography variant="body2">{details.late_penalty}</MDTypography>
                  </Grid>
                  {/* Add more fields as needed */}
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default AssessmentDetails;
