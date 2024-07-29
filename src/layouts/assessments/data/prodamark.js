// react
import React from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";

// eslint-disable-next-line react/prop-types
function AssessmentDetails({ course, term, assessment }) {
  const [marks, setMarks] = React.useState({
    labels: ["Placeholder"],
    datasets: [
      {
        label: "Placeholder",
        data: [0],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  });

  React.useEffect(() => {
    const fetchResults = async () => {
      const url = `http://localhost:3000/${course}/${term}/${assessment}/prodamark`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "content-Type": "application/json",
        },
      });
      const resBody = await res.json();
      console.log(resBody);

      const data = resBody.marks;

      const chartData = {
        labels: Object.keys(data),
        datasets: [
          {
            label: "Assessment Marks",
            data: Object.values(data),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      };

      setMarks(chartData);
    };

    fetchResults();
  }, []);

  return (
    <Card>
      <MDBox
        mx={2}
        mt={-3}
        py={3}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
      >
        <MDTypography variant="h6" color="white">
          {"Mark Distribution"}
        </MDTypography>
      </MDBox>
      <MDBox py={3} pl={4} display="flex" flexDirection="column">
        <Bar data={marks} />
      </MDBox>
    </Card>
  );
}

export default AssessmentDetails;
