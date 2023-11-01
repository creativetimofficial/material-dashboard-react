import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import reviewsTableData from "./data/reviewsTableData";
import reviewsTableDataRelations from "./data/reviewsTableDataRelations";
import { getReviews, getTypeReviews, getRatingReviews, getReviewsRelations } from "../../services/reviewsService";
import { Select, MenuItem, FormControl, InputLabel, TextField } from "@mui/material";

function Reviews() {
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [tableDataRelations, setTableDataRelations] = useState({ columns: [], rows: [] });
  const [reviewType, setReviewType] = useState("");
  const [searchQuery, setSearchQuery] = useState('');

  async function fetchDataRating(value) {
    try {
      const ratingReviews = await getRatingReviews(value);
      setTableData(reviewsTableData(ratingReviews));
    } catch (error) {
      console.error("Error fetching reviews data:", error);
    }
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    fetchDataRating(event.target.value)
  };

  async function fetchDataTypes(value) {
    try {
      setReviewType(value);
      const typeReviews = await getTypeReviews(value);
      setTableData(reviewsTableData(typeReviews));
    } catch (error) {
      console.error("Error fetching reviews data:", error);
    }
  }

  const handleReviewTypeChange = (event) => {
    setReviewType(event.target.value);
    fetchDataTypes(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const reviews = await getReviews();
        const reviewsRelations = await getReviewsRelations();
        console.log(reviewsRelations);
        setTableData(reviewsTableData(reviews));
        setTableDataRelations(reviewsTableDataRelations(reviewsRelations));
      } catch (error) {
        console.error("Error fetching reviews data:", error);
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
                    Reviews Table
                  </MDTypography>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <TextField
                      id="search-field"
                      label="Search Rating"
                      variant="outlined"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      sx={{ width: 130, backgroundColor: 'white', borderRadius: 1 }}
                    />
                    <FormControl variant="outlined" sx={{ minWidth: 120, backgroundColor: 'white', borderRadius: 1, marginRight: 3 }}>
                      <InputLabel id="review-type-label" style={{ color: 'white', marginTop: -10 }}>Type</InputLabel>
                      <Select
                        labelId="review-type-label"
                        id="review-type-select"
                        value={reviewType}
                        onChange={handleReviewTypeChange}
                        label="Type"
                      >
                        <MenuItem value="PositiveReview">Positive</MenuItem>
                        <MenuItem value="NegativeReview">Negative</MenuItem>
                      </Select>
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
                  Reviews Relation Table
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

export default Reviews;
