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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import PriceTable from "examples/Tables/PriceTable";

// Dashboard components
import bajadasSinPapel from "layouts/precios/data/bajadasSinPapel";

function Precios() {
  const { title: titleA, columns: columnsA, rows: rowsA } = bajadasSinPapel(true, "bajadasSinPapel");
  const { title: titleB, columns: columnsB, rows: rowsB } = bajadasSinPapel(false, "bajadasAlGremio");
  const { title: titleC, columns: columnsC, rows: rowsC } = bajadasSinPapel(false, "bajadasAlGremioA3");
  const { title: titleD, columns: columnsD, rows: rowsD } = bajadasSinPapel(false, "troquelado");

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
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
                  {titleA}
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <PriceTable
                  table={{ columns: columnsA, rows: rowsA }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </MDBox>
      </MDBox>
      <MDBox py={3}>
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
                  {titleB}
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <PriceTable
                  table={{ columns: columnsB, rows: rowsB }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </MDBox>
      </MDBox>
      <MDBox py={3}>
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
                  {titleC}
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <PriceTable
                  table={{ columns: columnsC, rows: rowsC }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </MDBox>
      </MDBox>
      <MDBox py={3}>
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
                  {titleD}
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <PriceTable
                  table={{ columns: columnsD, rows: rowsD }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Precios;
