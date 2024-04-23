/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React from "react";

const Student = ({ givenName, familyName }) => (
  <MDBox display="flex" alignItems="center" lineHeight={2}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {givenName + " " + familyName}
      </MDTypography>
    </MDBox>
  </MDBox>
);

export default function data() {
  const [students, setStudents] = React.useState([]);
  React.useEffect(() => {
    let results = [];
    const fetchResults = async () => {
      const res = await fetch("http://localhost:3000/students", {
        method: "GET",
      });
      const resBody = await res.json();
      resBody.students.forEach((x) => {
        results.push({
          course: <Student givenName={x.given_name} familyName={x.family_name} />,
        });
      });
      setStudents(results);
    };

    fetchResults();
  }, []);

  return {
    columns: [
      { Header: "Student Name", accessor: "course", width: "45%", align: "left" },
      // { Header: "zid", accessor: "term", align: "left" },
    ],
    rows: students,
  };
}
