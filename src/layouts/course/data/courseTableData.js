/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from "react";
import { Link } from "react-router-dom";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const Name = ({ givenName, familyName }) => (
  <MDBox display="flex" alignItems="center" lineHeight={2}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {givenName + " " + familyName}
      </MDTypography>
    </MDBox>
  </MDBox>
);

const Zid = ({ id }) => (
  <MDBox display="flex" alignItems="center" lineHeight={2}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {id}
      </MDTypography>
    </MDBox>
  </MDBox>
);

export default function data(props) {
  const [students, setStudents] = React.useState([]);
  React.useEffect(() => {
    let results = [];
    const fetchResults = async () => {
      const url = `http://localhost:3000/${props.course}/${props.term}/students?`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "content-Type": "application/json",
        },
      });
      const resBody = await res.json();
      resBody.students.forEach((x) => {
        results.push({
          name: (
            <Link to={`/${props.course}/${props.term}/${x.id}/marks`}>
              <Name givenName={x.given_name} familyName={x.family_name} />
            </Link>
          ),
          id: (
            <Link to={`/${props.course}/${props.term}/${x.id}/marks`}>
              <Zid id={x.id} />
            </Link>
          ),
        });
      });
      setStudents(results);
    };

    fetchResults();
  }, []);

  return {
    columns: [
      { Header: "zid", accessor: "id", align: "left" },
      { Header: "Student Name", accessor: "name", width: "45%", align: "left" },
    ],
    rows: students,
  };
}
