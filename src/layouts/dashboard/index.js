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

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { Button } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import SignIn from "layouts/authentication/sign-in";

const Dashboard = () => {
  const { sales, tasks } = reportsLineChartData;
  const [apiData, setApiData] = useState([]);
  const [refresh, setRefresh] = useState([]);
  console.log(apiData, "api data console");
  const name = "Uhadevi";
  const age = "23";
  const newJoin = "Yes";

  const onSubmit = () => {
    axios
      .post(`https://sheet.best/api/sheets/c0c6e87c-3582-41cc-8bfd-2ac272cb5483`, {
        name,
        age,
        newJoin,
      })
      .then((data) => {
        setRefresh(data);
      });
  };

  useEffect(() => {
    axios
      .get(`https://sheet.best/api/sheets/c0c6e87c-3582-41cc-8bfd-2ac272cb5483`)
      .then((response) => {
        setApiData(response.data);
      });
  }, [refresh]);

  const handleOpenModal = (item) => {
    console.log(item, "item");
  };
  return (
    <Fragment>
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox py={3}>
          {/* <div onClick={onSubmit} className="primary">New Button</div> <br />
        <br />
        <br /> */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="dark"
                  icon="groups"
                  title="Students Count"
                  count={2500}
                  percentage={{
                    color: "success",
                    amount: "+55%",
                    label: "than last year",
                  }}
                  onClick={() => handleOpenModal("clicked")}
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
                  icon="store"
                  title="Revenue"
                  count="34k"
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
                  icon="person_add"
                  title="Followers"
                  count="+91"
                  percentage={{
                    color: "success",
                    amount: "",
                    label: "Just updated",
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
          <MDBox mt={4.5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsBarChart
                    color="info"
                    title="website views"
                    description="Last Campaign Performance"
                    date="campaign sent 2 days ago"
                    chart={reportsBarChartData}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="success"
                    title="daily sales"
                    description={
                      <>
                        (<strong>+15%</strong>) increase in today sales.
                      </>
                    }
                    date="updated 4 min ago"
                    chart={sales}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="dark"
                    title="completed tasks"
                    description="Last Campaign Performance"
                    date="just updated"
                    chart={tasks}
                  />
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
          <MDBox>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={8}>
                <Projects />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <OrdersOverview />
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
        <Footer />
      </DashboardLayout>
    </Fragment>
  );
};

export default Dashboard;
