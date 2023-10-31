import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import requestTable from "./data/requesttable"; // Modify this to import your request table data
import { getAllRequests, getRequestsByStatus, getusersbyrequestid } from "./requestservice"; // Modify this to match your request service functions
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

function Requests() {
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [searchQuery, setSearchQuery] = useState("");
  const [requests, setrequets] = useState({ columns: [], rows: [] });

  async function fetchAllRequests() {
    try {
      const allRequestsData = await getAllRequests();

      const cleanedRequests = cleanRequestData(allRequestsData);
      setTableData(requestTable(cleanedRequests));
      setrequets(requestTable(cleanedRequests));
    } catch (error) {
      console.error("Error fetching all requests data:", error);
    }
  }
  async function fetchDataCategory(value) {
    try {
      const categoryProducts = await getusersbyrequestid(value);
      var cleanedusers = cleanRequestData(categoryProducts);
      console.log(cleanedusers);
      // setTableData(requestTable(cleanedusers));
      setrequets(requestTable(cleanedusers));
      
    } catch (error) {
      console.error("Error fetching products data:", error);
    }
  }
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    fetchDataCategory(event.target.value);
  };
  function cleanRequestData(rawData) {
    return rawData.map((request) => {
      return {
        requestID: request.requestID.value,
        status: request.status.value,
        name: request.name?.value,
        // Add other request fields here
      };
    });
  }

  useEffect(() => {
    async function fetchData() {
      fetchAllRequests();
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
                  Requests Table
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
                  Requests Table
                </MDTypography>
                <TextField
                  id="search-field"
                  label="Search"
                  variant="outlined"
                  sx={{ width: 130, backgroundColor: "white", borderRadius: 1 }}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={requests}
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

export default Requests;
