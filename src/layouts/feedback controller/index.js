// @mui material components
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"

// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import MDButton from "components/MDButton"

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import DashboardNavbar from "examples/Navbars/DashboardNavbar"
import Footer from "examples/Footer"
import DataTable from "examples/Tables/DataTable"
// Dat
import { AddTask } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useEffect, useState } from "react"
import MDInput from "components/MDInput"
import FeedlookModal from "./feedmodal/feedlook"

function FeedbackController() {
  const [openfeed, setOpenFeed] = useState([])
  const [swichFeedBack, setSwichFeedBack] = useState(false)
  const [refrFeedBack, setRefrFeedBack] = useState(false)

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    }

    fetch(`http://165.232.85.45:1988/koinot/feedback?active=${swichFeedBack}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setOpenFeed(result.object.content))
      .catch((error) => console.log("error", error))
  }, [swichFeedBack,refrFeedBack])

  const handleSaveFeedback = (id) => {
    console.log(id, "id")
    const requestOptions = {
      method: "PUT",
      redirect: "follow",
    }

    fetch(
      `http://165.232.85.45:1988/koinot/feedback/changeActive/${id}?active=${!swichFeedBack}`,
      requestOptions
    )
      .then((response) => response.json())
      .then(() => setRefrFeedBack(!refrFeedBack))
      .catch((error) => console.log("error", error))
  }

  const columns = [
    { Header: "Name", accessor: "fullname", width: "35%", align: "left" },
    { Header: "PhoneNumber", accessor: "number", width: "35%", align: "left" },
    { Header: "information", accessor: "information", width: "45%", align: "left" },
    { Header: "hide", accessor: "hide", width: "35%", align: "left" },
  ]
  const rows = openfeed?.map((data) => ({
    fullname: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <MDInput value={data.fullName} fullWidth>
          {data.fullName}
        </MDInput>
      </MDTypography>
    ),
    number: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <MDInput value={data.phoneNumber} fullWidth>
          {data.phoneNumber}
        </MDInput>
      </MDTypography>
    ),
    information: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <FeedlookModal
          name={data.fullName}
          phoneNumber={data.phoneNumber}
          email={data.email}
          title={data.description}
          
        />
      </MDTypography>
    ),
    hide: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <IconButton aria-label="addtask" size="small" onClick={() => handleSaveFeedback(data.id)}>
          <AddTask fontSize="small" />
        </IconButton>
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
                alignItems= 'center'
              >
                <MDTypography variant="h6" color="white">
                  Feedback controller {swichFeedBack ? "o'qilmadi" : "o'qildi"}
                </MDTypography>

                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  <IconButton
                    aria-label="addtask"
                    size="small"
                    onClick={() => setSwichFeedBack(true)}
                  >
                    <MDButton color={!swichFeedBack ? "" : "dark"}>uqilmadi</MDButton>
                  </IconButton>
                </MDTypography>
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  <IconButton
                    aria-label="addtask"
                    size="small"
                    onClick={() => setSwichFeedBack(false)}
                  >
                    <MDButton color={swichFeedBack ? "" : "dark"}>UQILDI</MDButton>
                  </IconButton>
                </MDTypography>
                <MDTypography variant="h6" color="white" right="20%">
                  Soni:{openfeed.length}
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
      <Footer />
    </DashboardLayout>
  )
}

export default FeedbackController
