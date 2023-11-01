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
import { getForums, getForumByTitle, getForumsRelations } from "../../services/forumService";

import forumsTableData from "./data/forumsTableData";
import forumsTableDataRelations from "./data/forumsTableDataRelations";

function Forums() {
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [tableDataRelations, setTableDataRelations] = useState({ columns: [], rows: [] });
  const [forumType, setForumType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchDataByType(value) {
    try {
      const forumByType = await getForumByTitle(value);
      setTableData(forumsTableData(forumByType));
    } catch (error) {
      console.error("Error fetching forum data:", error);
    }
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    fetchDataByType(event.target.value);
  };

  async function fetchDataByForumType(value) {
    try {
      setForumType(value);
      const forums = await getForums(value);
      setTableData(forumsTableData(forums));
    } catch (error) {
      console.error("Error fetching forum data:", error);
    }
  }

  const handleForumTypeChange = (event) => {
    setForumType(event.target.value);
    fetchDataByForumType(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const forums = await getForums();
        const forumRelations = await getForumsRelations();
        setTableData(forumsTableData(forums));
        setTableDataRelations(forumsTableDataRelations(forumRelations));
      } catch (error) {
        console.error("Error fetching forum data:", error);
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
                    Forums Table
                  </MDTypography>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <TextField
                      id="search-field"
                      label="Search"
                      variant="outlined"
                      value={searchQuery}
                      onChange={handleSearchChange}
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
                    >
                    </FormControl>
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
                  Forums Relation Table
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

export default Forums;
