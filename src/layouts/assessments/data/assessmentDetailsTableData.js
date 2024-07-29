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

export default function data(props) {
  const [details, setDetails] = React.useState([]);
  React.useEffect(() => {
    let results = [];
    const fetchResults = async () => {
      const url = `http://localhost:3000/${props.course}/${props.term}/${props.assessment}/details`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "content-Type": "application/json",
        },
      });
      const resBody = await res.json();
      results.push({
        assessment: <Assessment name={x.name} shortName={x.short_name} />,
      });
      setDetails(resBody.assessment);
    };

    fetchResults();
  }, []);

  return {
    columns: [
      { Header: "Name", accessor: "Name", width: "45%", align: "left" },
      { Header: "Weight", accessor: "Weight", align: "left" },
      { Header: "min mark", accessor: "min_mark", align: "left" },
      { Header: "max mark", accessor: "max_mark", align: "left" },
      { Header: "Late penalty", accessor: "penalty", align: "left" },
    ],
    rows: details,
  };
}
