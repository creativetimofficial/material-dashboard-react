import React from "react";
import { useParams } from "react-router-dom";

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

// Recharts for Data Visualization
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from "recharts";

// Mock Data (In a real app, fetch this using the 'id')
const mockData = [
  { time: "00:00", temp: 20, humidity: 40 },
  { time: "04:00", temp: 18, humidity: 42 },
  { time: "08:00", temp: 22, humidity: 38 },
  { time: "12:00", temp: 26, humidity: 35 },
  { time: "16:00", temp: 25, humidity: 37 },
  { time: "20:00", temp: 21, humidity: 39 },
];

function WallDetails() {
  const { id } = useParams();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mb={3}>
          <MDTypography variant="h3" fontWeight="medium">
            Climate Wall: {id}
          </MDTypography>
          <MDTypography variant="button" color="text">
            Detailed environmental metrics and real-time status.
          </MDTypography>
        </MDBox>

        <Grid container spacing={3}>
          {/* Temperature Trend */}
          <Grid item xs={12} md={6}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h6">Temperature Trend (°C)</MDTypography>
                <MDBox height="300px" mt={2}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="temp" 
                        stroke="#1A73E8" 
                        strokeWidth={3} 
                        dot={{ r: 4 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>

          {/* Humidity Trend */}
          <Grid item xs={12} md={6}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h6">Humidity Levels (%)</MDTypography>
                <MDBox height="300px" mt={2}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="humidity" fill="#4CAF50" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default WallDetails;