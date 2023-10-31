import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import usertable from "./data/usertable";
import { getallusers, gettypeusers, getusers, getusersbylocation } from "./userservice";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

function Products() {
  const [productType, setProductType] = useState("");
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [allusers, setallusers] = useState({ columns: [], rows: [] });
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchDataCategory(value) {
    try {
      const categoryProducts = await getusersbylocation(value);
      var cleanedusers = cleanProductData(categoryProducts);
      setTableData(usertable(cleanedusers));
    } catch (error) {
      console.error("Error fetching products data:", error);
    }
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    fetchDataCategory(event.target.value);
  };
  async function fetchDataTypes(value) {
    try {
      setProductType(value);
      const TypeProducts = await gettypeusers(value);
      var cleanedusers = cleanProductData(TypeProducts);
      setTableData(usertable(cleanedusers));
    } catch (error) {
      console.error("Error fetching products data:", error);
    }
  }
  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
    fetchDataTypes(event.target.value);
  };

  function cleanProductData(rawData) {
    return rawData.map((user) => {
      return {
        name: user.name.value,
        username: user.username.value,
        email: user.email.value,
        userID: user.userID?.value,
        location: user.location.value,
        status: user.status?.value,
      };
    });
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const rawProducts = await getusers();
        const rawallusers = await getallusers();
        const cleanedrawsers = cleanProductData(rawallusers);
        const cleanedProducts = cleanProductData(rawProducts);
        setTableData(usertable(cleanedProducts));
        setallusers(usertable(cleanedrawsers));
      } catch (error) {
        console.error("Error fetching products data:", error);
      }
    }

    fetchData();
  }, []);

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
                <MDTypography variant="h6" color="white">
                  Users Table
                </MDTypography>
                <div
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}
                >
                  <FormControl
                    variant="outlined"
                    sx={{ minWidth: 80, backgroundColor: "white", borderRadius: 1, marginRight: 3 }}
                  >
                    <InputLabel id="product-type-label" style={{ color: "white", marginTop: -10 }}>
                      Type
                    </InputLabel>
                    <Select
                      labelId="product-type-label"
                      id="product-type-select"
                      value={productType}
                      onChange={handleProductTypeChange}
                      label="Type"
                    >
                      <MenuItem value="Admin">Admin</MenuItem>
                      <MenuItem value="guest">Guest</MenuItem>
                      <MenuItem value="IndividualUser">IndividualUser</MenuItem>
                      <MenuItem value="BusinessUser">BusinessUser</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="search-field"
                    label="Search"
                    variant="outlined"
                    sx={{ width: 130, backgroundColor: "white", borderRadius: 1 }}
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={tableData}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
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
                <MDTypography variant="h6" color="white">
                  users Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={allusers}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
            <TextField
              id="search-field"
              label="Search"
              variant="outlined"
              sx={{ width: 130, backgroundColor: "white", borderRadius: 1 }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Products;
