/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React from "react";

const Course = ({ code }) => (
  <MDBox display="flex" alignItems="center" lineHeight={2}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {code}
      </MDTypography>
    </MDBox>
  </MDBox>
);

const Term = ({ term }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
      {term}
    </MDTypography>
  </MDBox>
);

export default function data() {
  const [subjects, setSubjects] = React.useState([]);
  React.useEffect(() => {
    let results = [];
    const fetchResults = async () => {
      const res = await fetch("http://localhost:3000/course_offerings", {
        method: "GET",
      });
      const resBody = await res.json();
      resBody.subjects.forEach((x) => {
        results.push({
          course: <Course code={x.course} />,
          term: <Term term={x.term} />,
        });
      });
      setSubjects(results);
    };

    fetchResults();
  }, []);

  return {
    columns: [
      { Header: "Course Code", accessor: "course", width: "45%", align: "left" },
      { Header: "Term", accessor: "term", align: "left" },
    ],
    rows: subjects,
  };
}
