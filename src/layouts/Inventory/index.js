import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import inventoryTableData from "./data/inventoryTableData";
import invnetoryTableDataRelations from "./data/invnetoryTableDataRelations";
import { getInventories, getInventoriesByType } from "../../services/inventoryService";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import inventoryTableDataRelations from "./data/invnetoryTableDataRelations";
function Inventories() {
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [tableDataRelations, setTableDataRelations] = useState({ columns: [], rows: [] });
  const [InventoryType, setInventoryType] = useState("");

  async function fetchDataTypes(value) {
    try {
      setInventoryType(value);
      const TypeInventories = await getInventoriesByType(value);
      console.log(TypeInventories);
      setTableData(inventoryTableData(TypeInventories));
    } catch (error) {
      console.error("Error fetching inventories data:", error);
    }
  }

  const handleInventoryTypeChange = (event) => {
    setInventoryType(event.target.value);
    const Inventories = fetchDataTypes(event.target.value);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const Inventories = await getInventories();
        setTableData(invnetoryTableDataRelations(Inventories));
      } catch (error) {
        console.error("Error fetching inventory data:", error);
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
                    Inventories Table
                  </MDTypography>
                  <FormControl variant="outlined" sx={{ minWidth: 60, backgroundColor: 'white', borderRadius: 1 }}>
                    <InputLabel id="inventory-type-label" style={{ color: 'white', marginTop: -10 }}>Type</InputLabel>
                    <Select
                      labelId="inventory-type-label"
                      id="inventory-type-select"
                      value={InventoryType}
                      onChange={handleInventoryTypeChange}
                      label="Type"

                    >
                      <MenuItem value="BusinessInventory">Business Inventory</MenuItem>
                      <MenuItem value="PersonalInventory">Personal Inventory</MenuItem>
                    </Select>
                  </FormControl>
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
                 Inventories Relation Table
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

export default Inventories;
