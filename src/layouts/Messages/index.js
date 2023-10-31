import React, { useEffect, useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { getMessages, getMessagesRelations } from "../../services/messagesService";

import messagesTableData from "./data/messagesTableData";
import messagesTableDataRelations from "./data/messagesTableDataRelations";

function Messages() {
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [tableDataRelations, setTableDataRelations] = useState({ columns: [], rows: [] });
  const [messageType, setMessageType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchDataByType(value) {
    try {
      const messagesByType = await getMessagesRelations(value);
      setTableData(messagesTableData(messagesByType));
    } catch (error) {
      console.error("Error fetching message data:", error);
    }
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    fetchDataByType(event.target.value);
  };

  async function fetchDataByMessageType(value) {
    try {
      setMessageType(value);
      const messages = await getMessages(value);
      setTableData(messagesTableData(messages));
    } catch (error) {
      console.error("Error fetching message data:", error);
    }
  }

  const handleMessageTypeChange = (event) => {
    setMessageType(event.target.value);
    fetchDataByMessageType(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const messages = await getMessages();
        const messageRelations = await getMessagesRelations();
        setTableData(messagesTableData(messages));
        setTableDataRelations(messagesTableDataRelations(messageRelations));
      } catch (error) {
        console.error("Error fetching message data:", error);
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
                <MDBox display="flex" justifyContent="space-between" alignItems="center">
                  <MDTypography variant="h6" color="white">
                    Messages Table
                  </MDTypography>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <TextField
                      id="search-field"
                      label="Search"
                      variant="outlined"
                      value={searchQuery}
                      onChange={handleMessageTypeChange}
                      sx={{ width: 130, backgroundColor: "white", borderRadius: 1 }}
                    />
                    <FormControl
                      variant="outlined"
                      sx={{
                        minWidth: 60,
                        backgroundColor: "white",
                        borderRadius: 1,
                        marginRight: 3,
                      }}
                    ></FormControl>
                  </div>
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
            <Card style={{ marginTop: "5%" }}>
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
                  Messages Relation Table
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

export default Messages;
