/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React from "react";

export default async function data() {
  const Student = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Course = ({ code, term }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {code}
      </MDTypography>
      <MDTypography variant="caption">{term}</MDTypography>
    </MDBox>
  );

  let res = await fetch("http://localhost:3000/course_offerings", {
    method: "GET",
  });
  let res2 = await res.json();
  console.log(res2);

  return {
    columns: [
      { Header: "student", accessor: "student", width: "45%", align: "left" },
      { Header: "Course", accessor: "course", align: "left" },
      { Header: "enrolled", accessor: "enrolled", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        student: <Student name="John Michael" />,
        course: <Course code="COMP1511" term="24T1" />,
        enrolled: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
