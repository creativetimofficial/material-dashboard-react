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
  console.log(props);
  const [students, setStudents] = React.useState([]);
  React.useEffect(() => {
    let results = [];
    const fetchResults = async () => {
      const res = await fetch("http://localhost:3000/get_assessments_of_course", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ term: props.term, course: props.course }),
      });
      const resBody = await res.json();
      console.log(resBody);
      resBody.students.forEach((x) => {
        results.push({
          name: (
            <Link to={`/assessment/${props.course}/${props.term}/${x.id}`}>
              <Name givenName={x.given_name} familyName={x.family_name} />
            </Link>
          ),
          id: (
            <Link to={`/assessment/${props.course}/${props.term}/${x.id}`}>
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
