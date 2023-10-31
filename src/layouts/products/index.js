import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import productsTableData from "./data/productsTableData";
import productsTableDataRelations from "./data/productsTableDataRelations";
import { getProducts, getTypeProducts, getCategoryProducts, getProductsRelations } from "../../services/productService";
import { Select, MenuItem, FormControl, InputLabel, TextField } from "@mui/material";
function Products() {
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [tableDataRelations, setTableDataRelations] = useState({ columns: [], rows: [] });
  const [productType, setProductType] = useState("");
  const [searchQuery, setSearchQuery] = useState('');

  async function fetchDataCategory(value) {
    try {

      const categoryProducts = await getCategoryProducts(value);
      setTableData(productsTableData(categoryProducts));
    } catch (error) {
      console.error("Error fetching products data:", error);
    }
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    fetchDataCategory(event.target.value)
  };


  async function fetchDataTypes(value) {
    try {
      setProductType(value);
      const TypeProducts = await getTypeProducts(value);
      setTableData(productsTableData(TypeProducts));
    } catch (error) {
      console.error("Error fetching products data:", error);
    }
  }

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
    fetchDataTypes(event.target.value);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const Products = await getProducts();
        const ProductsRelations = await getProductsRelations();
        console.log(ProductsRelations);
        setTableData(productsTableData(Products));
        setTableDataRelations(productsTableDataRelations(ProductsRelations));
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
              <MDBox mx={2} mt={-3} py={3} px={2} variant="gradient" bgColor="info" borderRadius="lg" coloredShadow="info">
                <MDBox display="flex" justifyContent="space-between" alignItems="center">
                  <MDTypography variant="h6" color="white">
                    Products Table
                  </MDTypography>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <TextField
                      id="search-field"
                      label="Search"

                      variant="outlined"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      sx={{ width: 130, backgroundColor: 'white', borderRadius: 1 }}
                    />
                    <FormControl variant="outlined" sx={{ minWidth: 60, backgroundColor: 'white', borderRadius: 1, marginRight: 3 }}>
                      <InputLabel id="product-type-label" style={{ color: 'white', marginTop: -10 }}>Type</InputLabel>
                      <Select
                        labelId="product-type-label"
                        id="product-type-select"
                        value={productType}
                        onChange={handleProductTypeChange}
                        label="Type"

                      >
                        <MenuItem value="Electronics">Electronics</MenuItem>
                        <MenuItem value="Non_Electronics">Non Electronics</MenuItem>
                      </Select>
                    </FormControl></div>
                </MDBox>
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
            <Card style={{ marginTop: "5% " }}>
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
                  Products Relation Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={tableDataRelations}
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
      <Footer />
    </DashboardLayout>
  );
}

export default Products;
