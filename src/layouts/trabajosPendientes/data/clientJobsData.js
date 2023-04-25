/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import InfoIcon from "@mui/icons-material/Info";
import DownloadIcon from "@mui/icons-material/Download";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDProgress from "components/MDProgress";

export default function data() {
  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "fecha", accessor: "fecha", align: "center" },
      { Header: "estado", accessor: "estado", align: "center" },
      { Header: "avance", accessor: "avance", align: "center" },
      { Header: "total", accessor: "total", align: "left" },
      { Header: "archivos", accessor: "archivos", align: "center" },
      { Header: "info", accessor: "info", align: "center" },
    ],

    rows: [
      {

      },
      {
        total: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $5,000
          </MDTypography>
        ),
        fecha: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/2/2023
          </MDTypography>
        ),
        estado: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        avance: <Progress color="success" value={100} />,
        info: (
          <MDTypography component="a" href="#" color="text">
            <InfoIcon>more_vert</InfoIcon>
          </MDTypography>
        ),
        archivos: (
          <MDTypography component="a" href="#" color="text">
            <DownloadIcon />
          </MDTypography>
        ),
      },
      {
        total: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $3,400
          </MDTypography>
        ),
        fecha: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/2/2023
          </MDTypography>
        ),
        estado: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            canceled
          </MDTypography>
        ),
        avance: <Progress color="error" value={30} />,
        info: (
          <MDTypography component="a" href="#" color="text">
            <InfoIcon>more_vert</InfoIcon>
          </MDTypography>
        ),
        archivos: (
          <MDTypography component="a" href="#" color="text">
            <DownloadIcon />
          </MDTypography>
        ),
      },
      {
        total: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $14,000
          </MDTypography>
        ),
        fecha: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/3/2023
          </MDTypography>
        ),
        estado: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            working
          </MDTypography>
        ),
        avance: <Progress color="info" value={80} />,
        info: (
          <MDTypography component="a" href="#" color="text">
            <InfoIcon>more_vert</InfoIcon>
          </MDTypography>
        ),
        archivos: (
          <MDTypography component="a" href="#" color="text">
            <DownloadIcon />
          </MDTypography>
        ),
      },
      {
        total: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $1,000
          </MDTypography>
        ),
        fecha: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/1/2023
          </MDTypography>
        ),
        estado: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            canceled
          </MDTypography>
        ),
        avance: <Progress color="error" value={0} />,
        info: (
          <MDTypography component="a" href="#" color="text">
            <InfoIcon>more_vert</InfoIcon>
          </MDTypography>
        ),
        archivos: (
          <MDTypography component="a" href="#" color="text">
            <DownloadIcon />
          </MDTypography>
        ),
      },
      {
        total: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,300
          </MDTypography>
        ),
        fecha: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            7/1/2023
          </MDTypography>
        ),
        estado: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        avance: <Progress color="success" value={100} />,
        info: (
          <MDTypography component="a" href="#" color="text">
            <InfoIcon>more_vert</InfoIcon>
          </MDTypography>
        ),
        archivos: (
          <MDTypography component="a" href="#" color="text">
            <DownloadIcon />
          </MDTypography>
        ),
      },
    ],
  };
}
