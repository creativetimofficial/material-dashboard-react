/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from "react";
import { Link } from "react-router-dom";

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
  const [assessments, setAssessments] = React.useState([]);

  React.useEffect(() => {
    let results = [];
    const fetchResults = async () => {
      const url = `http://localhost:3000/${props.course}/${props.term}/assessments`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "content-Type": "application/json",
        },
      });
      const resBody = await res.json();
      resBody.assessments.forEach((x) => {
        results.push({
          assessment: (
            <Link to={`/${props.course}/${props.term}/${x.short_name}/details`}>
              <Assessment
                name={x.name}
                shortName={x.short_name}
                onClick={() => setSelectedAssessment(x)}
              />
            </Link>
          ),
          deadline: (
            <Link to={`/${props.course}/${props.term}/${x.short_name}/details`}>
              <Deadline deadline={x.deadline} />
            </Link>
          ),
          weight: (
            <Link to={`/${props.course}/${props.term}/${x.short_name}/details`}>
              <Weight weight={x.weigh} />
            </Link>
          ),
          formula: (
            <Link to={`/${props.course}/${props.term}/${x.short_name}/details`}>
              <Formula formula={x.formula_mark} />
            </Link>
          ),
        });
      });
      setAssessments(results);
    };

    fetchResults();
  }, []);

  const AssessmentModal = () => {
    // ... Modal content and logic using selectedAssessment data
  };

  return {
    // weight forumla mark, deadline , names
    columns: [
      { Header: "Assessment", accessor: "assessment", align: "left" },
      { Header: "Deadline", accessor: "deadline", align: "left" },
      { Header: "Weight", accessor: "weight", align: "left" },
      { Header: "Formula", accessor: "formula", align: "left" },
    ],
    rows: assessments,
  };
}
