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
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify"; // Integrated Cognito

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

function Overview() {
  const [userData, setUserData] = useState({
    username: "Loading...",
    email: "Loading...",
    role: "System Operator",
  });

  // Fetch real data from AWS Cognito
  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUserData({
          username: user.attributes.nickname || user.username,
          email: user.attributes.email,
          role: "Climate Wall Administrator",
        });
      } catch (error) {
        console.error("Not authenticated", error);
      }
    }
    fetchUser();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            {/* Platform Settings: For Toggling Alerts/Notifications */}
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>

            {/* Profile Info: User Identity from Cognito */}
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="Account Information"
                description="Manage your Climate Wall access credentials and system-wide operator preferences."
                info={{
                  fullName: userData.username,
                  role: userData.role,
                  email: userData.email,
                  location: "System Controller",
                }}
                // Social links removed for professional dashboard
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>

            {/* Quick Actions / Session Management */}
            <Grid item xs={12} xl={4}>
              <MDBox p={2}>
                <MDTypography variant="h6" fontWeight="medium" mb={2}>
                  Session Management
                </MDTypography>
                <MDBox display="flex" flexDirection="column">
                  <MDButton 
                    variant="gradient" 
                    color="dark" 
                    fullWidth 
                    sx={{ mb: 2 }}
                    onClick={() => Auth.signOut()}
                  >
                    Log Out
                  </MDButton>
                  <MDTypography variant="caption" color="text" textAlign="center">
                    Logged in as: {userData.email}
                  </MDTypography>
                </MDBox>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        
        {/* Removed Projects section to focus on System Management */}
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;