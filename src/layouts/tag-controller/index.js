// @mui material components
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"

// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import DashboardNavbar from "examples/Navbars/DashboardNavbar"
import DataTable from "examples/Tables/DataTable"

import { useEffect, useState } from "react"
import AddModal from "layouts/dashboard copy/modals/addModal"
import DeleteModal from "layouts/dashboard copy/modals/deleteModal"
import EditModal from "layouts/dashboard copy/modals/editModal"
import MDSnackbar from "components/MDSnackbar"

function TagController() {
  const [tagcontrol, setTagControl] = useState([])
  const [categoriesRef, setCategoriesRef] = useState(false)
  // Succes Notification
  const [successSB, setSuccessSB] = useState({ open: false, message: "" })
  const openSuccessSB = (mes) => setSuccessSB({ open: true, message: mes })
  const closeSuccessSB = () => setSuccessSB({ open: false })
  // Error Notification
  const [errorSB, setErrorSB] = useState({ open: false, message: "" })
  const openErrorSB = (errorMes) => setErrorSB({ open: true, message: errorMes })
  const closeErrorSB = () => setErrorSB({ open: false })

  useEffect(() => {
    const requestOptions = {
      method: "GET",
    }

    fetch("http://165.232.85.45:1988/koinot/tag", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setTagControl(data.objectKoinot)
      })
  }, [categoriesRef])

  //  If the add new tag
  const tagcontrolAdd = (tag) => {
    console.log(tag)
    const myHeaders = new Headers()
    const token = localStorage.getItem("Token")
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${token}`)

    const raw = JSON.stringify({
      textEn: tag.addEng,
      textRu: tag.addRus,
      textUz: tag.addUzb,
      textUzK: tag.addUzbK,
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    fetch("http://165.232.85.45:1988/koinot/tag", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(typeof res.message, res.success)
        if (res.success === 200) {
          openSuccessSB("TagController addtag successfully")
          setCategoriesRef(!categoriesRef)
        }
      })
      .catch((error) => {
        console.log(error)
        openErrorSB(`TagController not Addtag ${error}`)
      })
  }

  //  If the request is successful edit the tag and return
  const updateTagControl = (item) => {
    console.log("item", item)
    const myHeaders = new Headers()
    const token = localStorage.getItem("Token")
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${token}`)

    const raw = JSON.stringify({
      textEn: item.textUz,
      textRu: item.textRu,
      textUz: item.textUz,
      textUzK: item.textUzK,
    })

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    fetch(`http://165.232.85.45:1988/koinot/tag/${item.id}`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(typeof res.message, res.success)
        if (res.success === 200) {
          openSuccessSB("TagController edit successfully")
          setCategoriesRef(!categoriesRef)
        }
      })
      .catch((error) => {
        console.log(error)
        openErrorSB(`TagController not Edit ${error}`)
      })
  }

  // If it is already delete, then remove it from the list
  const tagDelete = (id) => {
    console.log(id)
    const myHeaders = new Headers()
    const token = localStorage.getItem("Token")
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${token}`)

    const raw = ""

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    fetch(`http://165.232.85.45:1988/koinot/tag/${id}`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(typeof res.message, res.success)
        if (res.success === 200) {
          openSuccessSB("Category delete successfully")
          setCategoriesRef(!categoriesRef)
        }
      })
      .catch((error) => {
        console.log(error)
        openErrorSB(`Category not Delete ${error}`)
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
    { Header: "Data", accessor: "data", width: "20%", align: "left" },
    { Header: "Edit", accessor: "edit", width: "20%", align: "right" },
    { Header: "Delete", accessor: "delete", width: "20%", align: "right" },
  ]

  const rows = tagcontrol.map((tag) => ({
    uzbek: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {tag.textUz}
      </MDTypography>
    ),
    kiril: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {tag.textUzK}
      </MDTypography>
    ),
    ruscha: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {tag.textRu}
      </MDTypography>
    ),
    english: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {tag.textEn}
      </MDTypography>
    ),
    data: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {tag.updatedAt}
      </MDTypography>
    ),
    edit: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        <EditModal
          id={tag.id}
          nameEng={tag.textEn}
          nameRus={tag.textRu}
          nameUzb={tag.textUz}
          nameUzbK={tag.textUzK}
          saveAllName={(e) => updateTagControl(e)}
        />
      </MDTypography>
    ),
    delete: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        <DeleteModal itemData={tag} deleteBtn={(e) => tagDelete(e)} />
      </MDTypography>
    ),
  }))

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
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography variant="h6" color="white">
                  TagController Table
                </MDTypography>
                <AddModal saveBtn={(e) => tagcontrolAdd(e)} />
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

export default TagController
