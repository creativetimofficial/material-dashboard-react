import React from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Section() {
  return (
    <MDBox pt={2} px={2} lineHeight={1.25}>
      <MDTypography variant="h6" fontWeight="medium">
        Projects
      </MDTypography>
      <MDBox mb={1}>
        <MDTypography variant="button" color="text">
          Architects design houses
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

export default Section;
