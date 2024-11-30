import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

const StyledHeatmap = styled("div")(({ theme }) => ({
  ".react-calendar-heatmap": {
    fontSize: "12px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  ".react-calendar-heatmap text": {
    fill: "#6c757d", // Light gray for labels
  },
  ".color-github-0": {
    fill: "#ebedf0",
  },
  ".color-github-1": {
    fill: "#c6e48b",
  },
  ".color-github-2": {
    fill: "#7bc96f",
  },
  ".color-github-3": {
    fill: "#239a3b",
  },
  ".color-github-4": {
    fill: "#196127",
  },
  ".day": {
    stroke: "#fff",
    strokeWidth: "1px",
  },
}));

function ContributionHeatmap() {
  const today = new Date();
  const startDate = new Date(today.getFullYear(), today.getMonth() - 6, 1); // Last 6 months
  const sampleData = [
    { date: "2023-05-01", count: 8 },
    { date: "2023-06-15", count: 4 },
    { date: "2023-07-20", count: 3 },
    { date: "2023-08-30", count: 1 },
    { date: "2023-09-10", count: 0 }, // No contribution
    { date: "2023-10-01", count: 5 },
  ];

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        <MDTypography variant="h6" fontWeight="medium" gutterBottom>
          Contribution Heatmap
        </MDTypography>
        <StyledHeatmap>
          <CalendarHeatmap
            startDate={startDate}
            endDate={today}
            values={sampleData}
            classForValue={(value) => {
              if (!value || value.count === 0) return "color-github-0";
              return `color-github-${Math.min(value.count, 4)}`;
            }}
            tooltipDataAttrs={(value) => ({
              "data-tip": value.date
                ? `${value.date}: ${value.count} contributions`
                : "No contributions",
            })}
            showWeekdayLabels
          />
        </StyledHeatmap>
      </MDBox>
    </Card>
  );
}

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than last week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                count="2,300"
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
              <ContributionHeatmap />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
