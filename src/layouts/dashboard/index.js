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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import ClipLoader from "react-spinners/ClipLoader";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Toppers from "layouts/dashboard/components/Toppers";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import SignIn from "layouts/authentication/sign-in";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Dashboard = () => {
  const { sales, tasks } = reportsLineChartData;

  //Set Variables
  const [isHovered, setIsHovered] = useState(false);
  const [openStuModal, setOpenStuModal] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const weekendxi = {
    labels: ["W-1", "W-2", "W-3", "W-4", "W-5", "W-6", "W-7", "W-8", "W-9", "W-10"],
    datasets: { label: "NEET", data: [690, 685, 670, 720, 680, 660, 685, 640, 621, 688] },
  };
  const [apiData, setApiData] = useState([]);
  const [refresh, setRefresh] = useState([]);
  const finalData = apiData && apiData.filter((ff) => ff.Sno != "");

  const groupedData = apiData.reduce((acc, student) => {
    const studentClass = student.Class;
    if (!acc[studentClass]) {
      acc[studentClass] = [];
    }
    acc[studentClass].push(student);
    return acc;
  }, {});

  // Convert the grouped data to an array format if needed
  const classWiseData = Object.keys(groupedData).map((className) => {
    const students = groupedData[className];
    const boysCampus = students.filter((student) => student.Campus === "Boys Campus").length;
    const girlsCampus = students.filter((student) => student.Campus === "Girls Campus").length;
    const dayCampus = students.filter((student) => student.Campus === "Day Campus").length;

    return {
      className,
      students,
      totalCount: students.length,
      boysCampus,
      girlsCampus,
      dayCampus,
    };
  });

  console.log(classWiseData, "class wise data");

  useEffect(() => {
    axios
      .get(`https://sheet.best/api/sheets/f5398757-66b8-4939-a219-30de21809ef3`)
      .then((response) => {
        setApiData(response.data);
      });
  }, [refresh]);

  const handleOpen = () => setOpenStuModal(true);
  const handleClose = () => setOpenStuModal(false);

  return (
    <Fragment>
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox py={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="dark"
                  icon="groups"
                  title="Students Count"
                  count={
                    finalData.length > 0 ? (
                      <div
                        style={{
                          textDecoration: isHovered ? "underline" : "none",
                          cursor: "pointer",
                          display: "inline-block",
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleOpen}
                      >
                        {finalData.length}
                      </div>
                    ) : (
                      <ClipLoader color="#36d7b7" />
                    )
                  }
                  percentage={{
                    color: "success",
                    amount: "+55%",
                    label: "than last year",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon="wc"
                  title="Staff Count"
                  count="200"
                  percentage={{
                    color: "success",
                    amount: "+3%",
                    label: "than last month",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="badge"
                  title="Students Attendance"
                  count="2300"
                  percentage={{
                    color: "success",
                    amount: "+1%",
                    label: "than yesterday",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="primary"
                  icon="badge"
                  title="Staff Attendance"
                  count="180"
                  percentage={{
                    color: "success",
                    amount: "+2%",
                    label: "than yesterday",
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
          <MDBox mt={4.5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="error"
                    title="XII - NEET Weekend (2024-25)"
                    description={
                      <>
                        (<strong>+15%</strong>) increase than last month.
                      </>
                    }
                    // date="updated 4 min ago"
                    chart={weekendxi}
                    options={{
                      scales: {
                        y: {
                          beginAtZero: true,
                          suggestedMax: 720, // Set the maximum value for y-axis
                        },
                      },
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="dark"
                    title="XI - NEET Weekend (2024-25)"
                    description={
                      <>
                        (<strong>+10%</strong>) increase than last month.
                      </>
                    }
                    // date="just updated"
                    chart={tasks}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="info"
                    title="LT-NEET Weekend (2024-25)"
                    description={
                      <>
                        (<strong>+32%</strong>) increase than last month.
                      </>
                    }
                    // date="campaign sent 2 days ago"
                    chart={reportsBarChartData}
                  />
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
          <MDBox mt={4.5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="info"
                    title="XII - IIT Weekend (2024-25)"
                    description={
                      <>
                        (<strong>+10%</strong>) increase than last month.
                      </>
                    }
                    // date="updated 4 min ago"
                    chart={sales}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="success"
                    title="XI - IIT Weekend (2024-25)"
                    description={
                      <>
                        (<strong>+10%</strong>) increase than last month.
                      </>
                    }
                    // date="just updated"
                    chart={tasks}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="dark"
                    title="LT-IIT Weekend (2024-25)"
                    description={
                      <>
                        (<strong>+3%</strong>) increase than last month.
                      </>
                    }
                    // date="campaign sent 2 days ago"
                    chart={reportsBarChartData}
                  />
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
          <MDBox>
            <Grid item xs={12} md={12} lg={12}>
              <Toppers />
            </Grid>
          </MDBox>
        </MDBox>
      </DashboardLayout>
      <Modal
        open={openStuModal}
        onClose={handleClose}
        aria-labelledby="custom-modal-title"
        aria-describedby="custom-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="custom-modal-title" className="text-center" variant="h4" component="h2">
            Student Strength Details
          </Typography>
          <Typography id="custom-modal-description" sx={{ mt: 0 }}>
            <div className="text-center">
              <Table bordered responsive hover striped>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Class</th>
                    <th>Boys Campus</th>
                    <th>Girls Campus</th>
                    <th>Day Campus</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {classWiseData.map((item, index) => (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.className}</td>
                      <td>{item.boysCampus}</td>
                      <td>{item.girlsCampus}</td>
                      <td>{item.dayCampus}</td>
                      <td>
                        <b>{item.totalCount}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Typography>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default Dashboard;
