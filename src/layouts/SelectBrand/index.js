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

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
// import { Select } from "@material-ui/core";
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import MDTypography from "components/MDTypography";

// Data
import FetchProductData from "./FetchData";

function ProductTable() {
  const { columns, rows, setQuery, query } = FetchProductData();

  const selectionChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
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
                {/* <Select value={query} onChange={selectionChangeHandler}>
                  <option value="selectProductData">Select</option>
                  <option value="cetaphil">Cetaphil</option>
                  <option value="aveeno">Aveeno</option>
                  <option value="qv baby">QvBaby</option>
                </Select> */}
                <FormControl fullWidth>
                  <MDTypography variant="" color="white">
                    Brand
                  </MDTypography>
                  <NativeSelect
                    defaultValue="aveeno"
                    inputProps={{
                      name: "Brand",
                      id: "uncontrolled-native",
                    }}
                    value={query}
                    onChange={selectionChangeHandler}
                  >
                    <option value="aveeno">Aveeno</option>
                    <option value="cetaphil">Cetaphil</option>
                    <option value="qv baby">QvBaby</option>
                  </NativeSelect>
                </FormControl>
              </MDBox>
            </Card>
            <MDBox pt={3}>
              <DataTable
                table={{ columns, rows }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
                noEndBorder
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProductTable;
