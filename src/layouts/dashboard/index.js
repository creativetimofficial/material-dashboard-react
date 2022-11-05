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
      <MDBox ml={50} mt={20} mb={25}>
        {/* 파일 업로드 확인 */}
        {/* 업로드 한 파일명: imageSrc */}
        <div>
          {console.log(imageSrc)}
          {console.log(imageSrc.toString)}
          {imageSrc === "/static/media/fileUpload.82aece8c23679e8bda46.png" ? (
            <p />
          ) : (
            <div>
              <MDButton variant="gradient" color="info">
                Select Option&nbsp;
                <Icon>favorite</Icon>
              </MDButton>
            </div>
          )}
        </div>
        <main className="container">
          <label htmlFor="input-file">
            {imageSrc && (
              <img src={imageSrc} accept=".jpg, .jpeg, .png" alt="preview-img" width="550px" />
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
        </main>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
