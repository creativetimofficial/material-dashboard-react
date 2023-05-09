import DashboardLayout from "../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../examples/Navbars/DashboardNavbar";
import MDBox from "../components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "../components/MDTypography";


const Wrapper = ({children, title}) => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <MDBox mt={4.5}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  {title}
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {children}
              </MDBox>
            </Card>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  )
}

export default Wrapper;
