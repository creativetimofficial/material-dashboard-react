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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function PlatformSettings() {
  const [tempAlert, setTempAlert] = useState(true);
  const [humidityAlert, setHumidityAlert] = useState(true);
  const [offlineAlert, setOfflineAlert] = useState(true);
  const [analyticsReport, setAnalyticsReport] = useState(false);
  const [systemUpdate, setSystemUpdate] = useState(true);
  const [hardwareHealth, setHardwareHealth] = useState(false);

  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          System Alerts & Settings
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Environmental Thresholds
        </MDTypography>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox mt={0.5}>
            <Switch checked={tempAlert} onChange={() => setTempAlert(!tempAlert)} />
          </MDBox>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Email me when temperature exceeds 28°C
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox mt={0.5}>
            <Switch checked={humidityAlert} onChange={() => setHumidityAlert(!humidityAlert)} />
          </MDBox>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Notify if humidity drops below 30%
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox mt={0.5}>
            <Switch checked={offlineAlert} onChange={() => setOfflineAlert(!offlineAlert)} />
          </MDBox>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Urgent alert if a Climate Wall goes offline
            </MDTypography>
          </MDBox>
        </MDBox>

        <MDBox mt={3}>
          <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
            Reporting & Maintenance
          </MDTypography>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox mt={0.5}>
            <Switch checked={analyticsReport} onChange={() => setAnalyticsReport(!analyticsReport)} />
          </MDBox>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Weekly CSV analytics report via email
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox mt={0.5}>
            <Switch checked={systemUpdate} onChange={() => setSystemUpdate(!systemUpdate)} />
          </MDBox>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Automatic firmware update notifications
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox mt={0.5}>
            <Switch checked={hardwareHealth} onChange={() => setHardwareHealth(!hardwareHealth)} />
          </MDBox>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Monthly hardware health summary
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default PlatformSettings;