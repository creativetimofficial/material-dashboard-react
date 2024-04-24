/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React from "react";

const Assessment = ({ name }) => (
  <MDBox display="flex" alignItems="center" lineHeight={2}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
    </MDBox>
  </MDBox>
);

const Grade = ({ grade }) => (
  <MDBox display="flex" alignItems="center" lineHeight={2}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {grade}
      </MDTypography>
    </MDBox>
  </MDBox>
);

const Mark = ({ mark }) => (
  <MDBox display="flex" alignItems="center" lineHeight={2}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {mark}
      </MDTypography>
    </MDBox>
  </MDBox>
);

const Notes = ({ notes }) => (
  <MDBox display="flex" alignItems="center" lineHeight={2}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {notes}
      </MDTypography>
    </MDBox>
  </MDBox>
);

export default function data(props) {
  console.log(props);
  const [students, setStudents] = React.useState([]);
  React.useEffect(() => {
    let results = [];
    const fetchResults = async () => {
      const res = await fetch("http://localhost:3000/get_student_marks_of_course", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ student: props.student, term: props.term, course: props.course }),
      });
      const resBody = await res.json();
      console.log(resBody);
      resBody.marks.forEach((x) => {
        results.push({
          assessment: <Assessment name={x.assessment} />,
          grade: <Grade grade={x.grade} />,
          mark: <Mark mark={x.mark} />,
          notes: <Notes notes={x.notes} />,
        });
      });
      setStudents(results);
    };

    fetchResults();
  }, []);

  return {
    columns: [
      { Header: "Assessment", accessor: "assessment", align: "left" },
      { Header: "Mark", accessor: "mark", width: "45%", align: "left" },
      { Header: "Grade", accessor: "grade", width: "45%", align: "left" },
      { Header: "Notes", accessor: "notes", width: "45%", align: "left" },
    ],
    rows: students,
  };
}
