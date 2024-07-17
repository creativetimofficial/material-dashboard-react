//react
import React, { useEffect } from "react";
import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { Select, MenuItem, FormControl, FormControlLabel, InputLabel, Switch } from "@mui/material";
import { Editor } from "@monaco-editor/react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// eslint-disable-next-line react/prop-types
const AssessmentCard = ({
  // eslint-disable-next-line react/prop-types
  assessment_name,
  // eslint-disable-next-line react/prop-types
  shortname,
  // eslint-disable-next-line react/prop-types
  deadline,
  // eslint-disable-next-line react/prop-types
  cutoff,
  // eslint-disable-next-line react/prop-types
  astraName,
  // eslint-disable-next-line react/prop-types
  onInputChange,
  // eslint-disable-next-line react/prop-types
  assessment_names,
}) => {
  const [isFormulaEditorOpen, setIsFormulaEditorOpen] = useState(false);
  const [formula, setFormula] = useState("");

  const handleFormulaChange = (newValue) => {
    setFormula(newValue);
    onInputChange("formula", newValue);
  };

  const handleOpenFormulaEditor = () => {
    setIsFormulaEditorOpen(!isFormulaEditorOpen);
    if (!isFormulaEditorOpen) {
      setFormula("");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onInputChange(name, value);
  };

  return (
    <div className="assessment-card">
      <TextField
        label="Assessment Name"
        name="assessment_name"
        value={assessment_name}
        fullWidth
        margin="normal"
        onChange={handleInputChange}
      />
      <TextField
        label="Short Name"
        name="shortname"
        value={shortname}
        fullWidth
        margin="normal"
        onChange={handleInputChange}
      />
      <TextField
        label="Astra Name"
        name="astraName"
        value={astraName}
        fullWidth
        margin="normal"
        onChange={handleInputChange}
      />
      <TextField
        label="Deadline (YYYY-MM-DD)"
        name="deadline"
        value={deadline}
        fullWidth
        margin="normal"
        type="date"
        InputLabelProps={{ shrink: true }} // Required for date input
        onChange={handleInputChange}
      />
      <TextField
        label="Cutoff (Date)"
        name="cutoff"
        value={cutoff}
        fullWidth
        margin="normal"
        type="date"
        InputLabelProps={{ shrink: true }} // Required for date input
        onChange={handleInputChange}
      />
      {/* <FormControlLabel
        control={
          <Checkbox
            checked={isFormulaMark}
            onChange={(event) => onInputChange("isFormulaMark", event.target.checked)}
            name="isFormulaMark"
          />
        }
        label="Formula Mark"
      /> */}
      <FormControlLabel
        control={<Switch checked={isFormulaEditorOpen} onChange={handleOpenFormulaEditor} />}
      />
      {isFormulaEditorOpen && ( // Conditionally render formula editor
        <div className="formula-editor-subcard">
          <Editor
            height="40vh"
            width="100%"
            defaultLanguage="python"
            theme="vs-dark"
            defaultValue={`def formulaMark(${assessment_names}):\n\treturn (ass1/40) * 100\n`}
            value={formula}
            onChange={handleFormulaChange}
          />
        </div>
      )}
    </div>
  );
};

function AddCourseOffering() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  const [terms, setTerms] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState("");

  const [assessments, setAssessments] = useState([]);
  const [assessmentNames, setAssessmentNames] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:3000/courses", {
          method: "GET",
          headers: {
            "content-Type": "application/json",
          },
        });
        const courseData = await res.json();
        setCourses(courseData.courses.map((course) => course.code));
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    const fetchTerms = async () => {
      try {
        const res = await fetch("http://localhost:3000/terms", {
          method: "GET",
          headers: {
            "content-Type": "application/json",
          },
        });
        const termData = await res.json();
        setTerms(termData.terms.map((term) => term.name));
      } catch (error) {
        console.error("Error fetching terms: ", error);
      }
    };

    fetchCourses();
    fetchTerms();
  }, []);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  };

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
    console.log("Input changed:", index, field, value);
    setAssessments((prevAssessments) => {
      const updatedAssessments = [...prevAssessments];
      updatedAssessments[index] = {
        ...updatedAssessments[index],
        [field]: value,
      };
      return updatedAssessments;
    });
    setAssessmentNames(assessments.map((ass) => ass.shortName).join(", "));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
                      {/* <TextField
                        fullWidth
                        id="courseName"
                        label="Course Name"
                        variant="outlined"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                      /> */}
                      <FormControl sx={{ minWidth: 120, width: "100%" }}>
                        <InputLabel id="course-label">Course</InputLabel>
                        <Select
                          labelId="course-label"
                          id="course"
                          value={selectedCourse}
                          onChange={handleCourseChange}
                          sx={{ height: "40px" }}
                        >
                          {courses.map((course) => (
                            <MenuItem key={course} value={course}>
                              {course}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      {/* <TextField
                        fullWidth
                        id="courseTerm"
                        label="Course Term"
                        variant="outlined"
                        value={courseTerm}
                        onChange={(e) => setCourseTerm(e.target.value)}
                      /> */}
                      <FormControl sx={{ minWidth: 120, width: "100%" }}>
                        <InputLabel id="term-label">Term</InputLabel>
                        <Select
                          labelId="term-label"
                          id="term"
                          value={selectedTerm}
                          onChange={handleTermChange}
                          sx={{ height: "40px" }}
                        >
                          {terms.map((term) => (
                            <MenuItem key={term} value={term}>
                              {term}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </form>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox py={3} px={4}>
                {assessments.length > 0 && (
                  <div className="assessment-grid">
                    <h2>Assessments</h2>
                    {assessments.map((assessment, index) => (
                      <AssessmentCard
                        key={assessment.id || index} // Use ID if available, otherwise use index
                        {...assessment}
                        onInputChange={(field, value) =>
                          handleAssessmentChange(index, field, value)
                        }
                        assessment_names={assessmentNames}
                      />
                    ))}
                  </div>
                )}
                {/* {assessments.map((assessment, index) => (
                  <Grid container spacing={6} key={index}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={`Assessment ${index + 1} Name`}
                        variant="outlined"
                        value={assessment.name}
                        onChange={(e) => handleAssessmentChange(index, "name", e.target.value)}
                      />
                    </Grid>
                  </Grid>
                ))} */}
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
              </MDBox>
              <Grid item xs={12}>
                <MDButton type="submit" color="info" variant="gradient" fullWidth>
                  Add Course
                </MDButton>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default AddCourseOffering;
