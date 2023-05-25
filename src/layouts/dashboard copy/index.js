import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import DashboardLayout from "examples/LayoutContainers/DashboardLayout"

// @mui material components

// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDButton from "components/MDButton"
import MDTypography from "components/MDTypography"

// Material Dashboard 2 React example components
import Tooltip from "@mui/material/Tooltip"
import DashboardNavbar from "examples/Navbars/DashboardNavbar"
import DataTable from "examples/Tables/DataTable"
import { useEffect, useState } from "react"

import AddModal from "./modals/addModal"
import DeleteModal from "./modals/deleteModal"
import EditModal from "./modals/editModal"

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
    { Header: "Uzb", accessor: "uzbek", width: "20%", align: "left" },
    { Header: "UzK", accessor: "kiril", width: "20%", align: "left" },
    { Header: "Rus", accessor: "ruscha", width: "20%", align: "left" },
    { Header: "Eng", accessor: "english", width: "20%", align: "left" },
    { Header: "Edit", accessor: "edit", width: "20%", align: "right" },
    { Header: "Delete", accessor: "delete", width: "20%", align: "right" },
  ]

  const rows = categories.map((item) => ({
    uzbek: (
      <MDTypography component="a" color="dark" href="#" variant="caption" fontWeight="medium">
        {item.textUz}
      </MDTypography>
    ),
    kiril: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {item.textUzK}
      </MDTypography>
    ),
    ruscha: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {item.textRu}
      </MDTypography>
    ),
    english: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {item.textEn}
      </MDTypography>
    ),
    edit: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        <MDButton variant="text" color="dark">
          <Tooltip title="Edit Categories" placement="top">
            <EditModal props={item} />
          </Tooltip>
        </MDButton>
      </MDTypography>
    ),
    delete: (
      <MDTypography component="a" href="#" variant="caption" color="error" fontWeight="medium">
        <Tooltip title="Delete" color="error">
          <DeleteModal />
        </Tooltip>
      </MDTypography>
    ),
  }))

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
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography variant="h4" color="white">
                  Category Table
                </MDTypography>
                <AddModal />
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
