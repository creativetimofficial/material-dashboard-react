//react
import React from "react";
import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Courses() {
  const [courseName, setCourseName] = useState("");
  const [courseTerm, setCourseTerm] = useState("");
  const [assessments, setAssessments] = useState([]);

  const handleAddAssessment = () => {
    setAssessments([
      ...assessments,
      {
        name: "",
        shortName: "",
        weigh: 0,
        deadline: "",
        late: 0,
        cutoff: "",
        astraName: "",
        minMark: 0,
        maxMark: 100,
        formulaMark: "",
      },
    ]);
  };

  const handleAssessmentChange = (index, field, value) => {
    const updatedAssessments = [...assessments];
    updatedAssessments[index][field] = value;
    setAssessments(updatedAssessments);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission, for now, I'm just logging the data
    console.log("Course Name:", courseName);
    console.log("Course Term:", courseTerm);

    fetch("http://localhost:3000/term", {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        year: "20" + courseTerm[0] + courseTerm[1],
        session: str(courseTerm[2] + courseTerm[3]),
      }),
    }).then((res) =>
      fetch("http://localhost:3000/course", {
        method: "PUT",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          year: "20" + courseTerm[0] + courseTerm[1],
          session: String(courseTerm[2] + courseTerm[3]),
        }),
      })
    );
    // Redirect to a different page
    history.push("/otherpage");
  };

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
                  Adding Course
                </MDTypography>
              </MDBox>
              <MDBox py={3} px={4}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="courseName"
                        label="Course Name"
                        variant="outlined"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="courseTerm"
                        label="Course Term"
                        variant="outlined"
                        value={courseTerm}
                        onChange={(e) => setCourseTerm(e.target.value)}
                      />
                    </Grid>
                    {assessments.map((assessment, index) => (
                      <Grid container spacing={2} key={index}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label={`Assessment ${index + 1} Name`}
                            variant="outlined"
                            value={assessment.name}
                            onChange={(e) => handleAssessmentChange(index, "name", e.target.value)}
                          />
                        </Grid>
                        {/* Add more fields for other assessment properties */}
                      </Grid>
                    ))}
                    <Grid item xs={12}>
                      <MDButton
                        type="button"
                        color="info"
                        variant="gradient"
                        fullWidth
                        onClick={handleAddAssessment}
                      >
                        Add Assessment
                      </MDButton>
                    </Grid>
                    <Grid item xs={12}>
                      <MDButton type="submit" color="info" variant="gradient" fullWidth>
                        Add Course
                      </MDButton>
                    </Grid>
                  </Grid>
                </form>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Courses;
