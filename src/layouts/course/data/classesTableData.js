/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from "react";
import { Link } from "react-router-dom";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const Name = ({ name }) => (
  <MDBox display="flex" alignItems="center" lineHeight={2}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
    </MDBox>
  </MDBox>
);

const Type = ({ type }) => (
  <MDBox display="flex" alignItems="center" lineHeight={2}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {type}
      </MDTypography>
    </MDBox>
  </MDBox>
);

export default function data(props) {
  const [students, setStudents] = React.useState([]);
  React.useEffect(() => {
    let results = [];
    const fetchResults = async () => {
      const url = `http://localhost:3000/${props.course}/${props.term}/classes`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "content-Type": "application/json",
        },
      });
      const resBody = await res.json();
      resBody.classes.forEach((x) => {
        results.push({
          name: (
            <Link to={`/${props.course}/${props.term}/${x.id}/marks`}>
              <Name name={x.name} />
            </Link>
          ),
          type: (
            <Link to={`/${props.course}/${props.term}/${x.id}/marks`}>
              <Type type={x.type} />
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
      { Header: "Class", accessor: "name", align: "left" },
      { Header: "Type", accessor: "type", width: "45%", align: "left" },
    ],
    rows: students,
  };
}
