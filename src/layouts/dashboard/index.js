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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { useState } from "react";
import fileUpload from "../../assets/images/fileUpload.png";

function Dashboard() {
  const [imageSrc, setImageSrc] = useState(fileUpload);

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox>
                {/* 파일 업로드 확인 */}
                {/* 업로드 한 파일명: imageSrc */}
                <MDBox>
                  {console.log(imageSrc)}
                  {console.log(imageSrc.toString)}
                  {imageSrc === "/static/media/fileUpload.82aece8c23679e8bda46.png" ? (
                    <p />
                  ) : (
                    <MDBox mb="-100px" ml="600px" mt="50px">
                      <span fontSize="14pt">Select Option</span>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <MDButton variant="gradient" color="info" size="large">
                        <Icon>favorite</Icon>
                      </MDButton>
                    </MDBox>
                  )}
                </MDBox>
                <MDBox className="container" ml="30%" mt="140px" mb="180px">
                  <label htmlFor="input-file">
                    {imageSrc && (
                      <img
                        src={imageSrc}
                        accept=".jpg, .jpeg, .png"
                        alt="preview-img"
                        width="550px"
                      />
                    )}
                  </label>
                  <input
                    width="500px"
                    type="file"
                    id="input-file"
                    onChange={(e) => {
                      encodeFileToBase64(e.target.files[0]);
                    }}
                    style={{ display: "none" }}
                  />
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

export default Dashboard;
