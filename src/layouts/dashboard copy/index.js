import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"

// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"

// Material Dashboard 2 React example components
import DashboardNavbar from "examples/Navbars/DashboardNavbar"
import DataTable from "examples/Tables/DataTable"
import { useEffect, useState } from "react"

function Dashboard() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
    fetch("http://165.232.85.45:1988/koinot/category", requestOptions)
      .then((response) => response.json())
      .then((data) => setCategories(data.objectKoinot))
  }, [])

  const columns = [
    { Header: "Uzbek", accessor: "status", align: "center" },
    { Header: "Rus", accessor: "employed", align: "center" },
    { Header: "Eng", accessor: "action", align: "center" },
  ]
  const rows = categories.map((item) => ({
    status: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      {item.textUz}
    </MDTypography>
    ),
    employed: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {item.textRu}
      </MDTypography>
    ),
    action: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {item.textEn}
      </MDTypography>
    ),
  }))
  console.log("categories", categories)
  return (
    <DashboardLayout>
      <h1>Category</h1>
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
                  Authors Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
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
    </DashboardLayout>
  )
}

export default Dashboard
