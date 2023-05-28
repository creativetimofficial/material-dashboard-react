import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import DashboardLayout from "examples/LayoutContainers/DashboardLayout"

// @mui material components

// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDButton from "components/MDButton"
import MDTypography from "components/MDTypography"
import MDSnackbar from "components/MDSnackbar"
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
  // Succes Notification
  const [successSB, setSuccessSB] = useState({ open: false, message: "" })
  const openSuccessSB = (mes) => setSuccessSB({ open: true, message: mes })
  const closeSuccessSB = () => setSuccessSB({ open: false })
  // Error Notification
  const [errorSB, setErrorSB] = useState({ open: false, message: "" })
  const openErrorSB = (errorMes) => setErrorSB({ open: true, message: errorMes })
  const closeErrorSB = () => setErrorSB({ open: false })
  
  //  Categories information api
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
    fetch("http://165.232.85.45:1988/koinot/category", requestOptions)
      .then((response) => response.json())
      .then((data) => setCategories(data.objectKoinot))
  }, [])

  // Add Category api
  const addCategory = (add) => {
    console.log(add)
    const Token = localStorage.getItem("Token")
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${Token}`)

    const raw = JSON.stringify({
      id: 1,
      parentCategory: 1,
      textEn: add.addEng,
      textRu: add.addRus,
      textUz: add.addUzb,
      // textUzK: add.addUzbK,
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    fetch("http://165.232.85.45:1988/koinot/category", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const res = JSON.parse(result)
        console.log(typeof res.message, res.success)
        if (res.success === 200) {
          openSuccessSB("Category added successfully")
        }
      })
      .catch((error) => {
        console.log(error)
        openErrorSB(`Category not added ${error}`)
      })
  }

  // Delete Category api
  const deleteCategory = (id) => {
    const Token = localStorage.getItem("Token")
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${Token}`)
    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    }
    console.log(id, "id delete")
    fetch(`http://165.232.85.45:1988/koinot/category/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const res = JSON.parse(result)
        console.log(typeof res.message, res.success)
        if (res.success === 200) {
          openSuccessSB("Category deleted successfully")
        }
      })
      .catch((error) => {
        console.log(error)
        openErrorSB(`Category not deleted ${error}`)
      })
  }

  // Notifications
  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content={successSB.message}
      open={successSB.open}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  )
  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content={errorSB.message}
      open={errorSB.open}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  )

  //  Columns port
  const columns = [
    { Header: "Uzb", accessor: "uzbek", width: "20%", align: "left" },
    { Header: "UzK", accessor: "kiril", width: "20%", align: "left" },
    { Header: "Rus", accessor: "ruscha", width: "20%", align: "left" },
    { Header: "Eng", accessor: "english", width: "20%", align: "left" },
    { Header: "Edit", accessor: "edit", width: "20%", align: "right" },
    { Header: "Delete", accessor: "delete", width: "20%", align: "right" },
  ]

  //  Rows categories
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
          <EditModal props={item} />
        </MDButton>
      </MDTypography>
    ),
    delete: (
      <MDTypography component="a" href="#" variant="caption" color="error" fontWeight="medium">
        <Tooltip title="Delete" color="error">
          <DeleteModal itemData={item} deleteBtn={(e) => deleteCategory(e)} />
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
                <AddModal saveBtn={(e) => addCategory(e)} />
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
      {renderSuccessSB}
      {renderErrorSB}
    </DashboardLayout>
  )
}

export default Dashboard
