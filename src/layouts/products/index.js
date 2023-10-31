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
import { getProducts } from "../../services/productService";

function Products() {
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  function cleanProductData(rawData) {
    return rawData.map(product => {
      return {
        category: product.category.value,
        description: product.description.value,
        name: product.name.value,
        productID: product.productID.value,
        user: product.user.value.split('#')[1] // This assumes that the user URI is always in the format http://www.example.org/ontology#UserX
      };
    });
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const rawProducts = await getProducts();
        const cleanedProducts = cleanProductData(rawProducts);
        console.log("Products data:", cleanedProducts);
        setTableData(productsTableData(cleanedProducts));
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
                  Products Table
                </MDTypography>
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
      <Footer />
    </DashboardLayout>
  );
}

export default Products;
