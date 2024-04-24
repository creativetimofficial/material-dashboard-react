/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import React from "react";
import { Link } from "react-router-dom";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

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
          course: (
            <Link to={`/course/${x.course}/${x.term}`}>
              <Course code={x.course} />
            </Link>
          ),
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
