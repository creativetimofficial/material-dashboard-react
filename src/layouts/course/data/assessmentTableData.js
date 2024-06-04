/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const Assessment = ({ name, shortName }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
      {name}
    </MDTypography>
    <MDTypography variant="caption">{shortName}</MDTypography>
  </MDBox>
);

const Deadline = ({ deadline }) => (
  <MDBox display="flex" alignItems="center" lineHeight={2}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {deadline}
      </MDTypography>
    </MDBox>
  </MDBox>
);

const Weight = ({ weight }) => (
  <MDBox display="flex" alignItems="center" lineHeight={2}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {weight}
      </MDTypography>
    </MDBox>
  </MDBox>
);

const Formula = ({ formula }) => (
  <MDBox display="flex" alignItems="center" lineHeight={2}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {formula}
      </MDTypography>
    </MDBox>
  </MDBox>
);

export default function data(props) {
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
      resBody.assessments.forEach((x) => {
        results.push({
          assessment: <Assessment name={x.name} shortName={x.short_name} />,
          deadline: <Deadline deadline={x.deadline} />,
          weight: <Weight weight={x.weigh} />,
          formula: <Formula formula={x.formula_mark} />,
        });
      });
      setStudents(results);
    };

    fetchResults();
  }, []);

  return {
    // weight forumla mark, deadline , names
    columns: [
      { Header: "Assessments", accessor: "assessment", align: "left" },
      { Header: "Deadline", accessor: "deadline", align: "left" },
      { Header: "Weight", accessor: "weigth", align: "left" },
      { Header: "Formula", accessor: "deadline", align: "left" },
    ],
    rows: students,
  };
}
