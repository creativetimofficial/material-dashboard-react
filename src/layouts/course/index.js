// react
import React, { useRef } from "react";
import { useParams } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import { ToggleButton, ToggleButtonGroup, Button } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import StudentsTable from "./students";
import AssessmentsTable from "./assessments";

function Course() {
  const { course, term } = useParams();

  const [selectedTable, setSelectedTable] = React.useState("students");
  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  const handleAstra = async () => {
    const res = await fetch(`http://localhost:3000/${course}/${term}/astra`, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${course}-${term}.csv`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
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
      <MDBox pt={2}>
        <MDButton variant="contained" onClick={handleAstra}>
          Export astra csv
        </MDButton>
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
