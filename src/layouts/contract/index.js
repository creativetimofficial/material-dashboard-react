import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import contractTableData from "./data/contractTableData";
import contractTableDataRelations from "./data/contractTableDataRelations";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { getContractsType } from "services/contractService";
import { getContracts } from "services/contractService";
function Contracts() {
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [tableDataRelations, setTableDataRelations] = useState({ columns: [], rows: [] });
  const [contractType, setContractType] = useState("");

  async function fetchDataTypes(value) {
    try {
      setContractType(value);
      const TypeContracts = await getContractsType(value);
      console.log(TypeContracts);
      setTableData(contractTableData(TypeContracts));
    } catch (error) {
      console.error("Error fetching contracts data:", error);
    }
  }

  const handleContractTypeChange = (event) => {
    setContractType(event.target.value);
    const Contracts = fetchDataTypes(event.target.value);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const Contracts = await getContracts();
        console.log(Contracts);
        setTableData(contractTableDataRelations(Contracts));
      } catch (error) {
        console.error("Error fetching contracts data:", error);
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
                    Contracts Table
                  </MDTypography>
                  <FormControl variant="outlined" sx={{ minWidth: 60, backgroundColor: 'white', borderRadius: 1 }}>
                    <InputLabel id="contract-type-label" style={{ color: 'white', marginTop: -10 }}>Type</InputLabel>
                    <Select
                      labelId="contract-type-label"
                      id="contract-type-select"
                      value={contractType}
                      onChange={handleContractTypeChange}
                      label="Type"

                    >
                      <MenuItem value="TradeContract">Trade Contract</MenuItem>
                      <MenuItem value="OneWayContract">One Way Contract</MenuItem>
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
                 Contracts Relation Table
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

export default Contracts;
