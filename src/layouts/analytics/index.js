import React from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Recharts for Historical Trends
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from "recharts";

const historicalData = [
  { month: "Jan", efficiency: 85 },
  { month: "Feb", efficiency: 88 },
  { month: "Mar", efficiency: 92 },
  { month: "Apr", efficiency: 90 },
  { month: "May", efficiency: 95 },
];

function Analytics() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/* Top Summary Metrics */}
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={4}>
            <ComplexStatisticsCard
              color="dark"
              icon="thermostat"
              title="System Efficiency"
              count="94%"
              percentage={{ color: "success", amount: "+3%", label: "than last month" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ComplexStatisticsCard
              icon="leaderboard"
              title="Active Walls"
              count="12"
              percentage={{ color: "success", amount: "+1", label: "newly connected" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ComplexStatisticsCard
              color="success"
              icon="bolt"
              title="Energy Saved"
              count="1.2k Wh"
              percentage={{ color: "success", amount: "+12%", label: "vs baseline" }}
            />
          </Grid>
        </Grid>

        {/* Historical Trend Chart */}
        <MDBox mb={3}>
          <Card>
            <MDBox p={3}>
              <MDTypography variant="h6">Historical Performance Summary</MDTypography>
              <MDBox height="400px" mt={2}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={historicalData}>
                    <defs>
                      <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1A73E8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#1A73E8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="efficiency" stroke="#1A73E8" fillOpacity={1} fill="url(#colorEff)" />
                  </AreaChart>
                </ResponsiveContainer>
              </MDBox>
            </MDBox>
          </Card>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Analytics;