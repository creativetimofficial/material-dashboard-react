// react
import React from "react";
import { useParams } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import StudentsTable from "./students";
import AssessmentsTable from "./assessments";

function Course() {
  const [selectedTable, setSelectedTable] = React.useState("students");
  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={2}>
        <ToggleButtonGroup value={selectedTable} onChange={handleTableChange} exclusive>
          <ToggleButton value="students">Students</ToggleButton>
          <ToggleButton value="assessments">Assessments</ToggleButton>
        </ToggleButtonGroup>
      </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          {selectedTable === "students" ? <StudentsTable /> : <AssessmentsTable />}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Course;
