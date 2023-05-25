
import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"


// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardNavbar from "examples/Navbars/DashboardNavbar"
import DataTable from "examples/Tables/DataTable"
import { useEffect, useState } from "react"
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import BasicModal from "./modal";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(25%, 25%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function Dashboard() {
  
  const [deletModal, setDeletModal] = useState(false)
  
  

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
  console.log(categories)
 
console.log()
  const columns = [
      { Header: "Uzb", accessor: "uzbek", width: "20%", align: "left" },
      { Header: "UzK", accessor: "kiril", width: "20%", align: "left" },
      { Header: "Rus", accessor: "ruscha", width: "20%", align: "left" },
      { Header: "Eng", accessor: "english", width: "20%", align: "left" },
      { Header: "Edit", accessor: "edit", width: "20%", align: "right" },
      { Header: "Delete", accessor: "delete", width: "20%", align: "right" },
  ] 
  

  const handleClickOpen = () => {
    setDeletModal(true);
  };

  const handleClose = () => {
    setDeletModal(false);
  };

  const rows = categories.map((item) => ({
    uzbek: (
      <MDTypography component="a" color="dark" href="#" variant="caption" fontWeight="medium" >
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
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium" >
          <MDButton variant="text" color="dark">
            <Tooltip title="Edit Categories" placement="top">
              <Icon sx={{ cursor: "pointer" }} fontSize="small">
               edit:
              </Icon>
            </Tooltip>
          </MDButton>
      </MDTypography>
    ),
    delete: (
      <MDTypography component="a" href="#" variant="caption" color="error" fontWeight="medium">
          <Tooltip title="Delete" color="error" >
            <IconButton variant="outlined" >
              <DeleteIcon onClick={handleClickOpen} />
            </IconButton>
            </Tooltip> 
            <Modal
              open={deletModal}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <MDBox sx={style}>
                <MDButton onClick={handleClose}>
                  Disagree
                </MDButton>
                <MDButton onClick={handleClose}>
                  Agree
                </MDButton>
              </MDBox>
            </Modal>
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
                display="flex" 
                justifyContent="space-between" 
                alignItems="center"
              >
                <MDTypography variant="h4" color="white">
                  Authors Table
                </MDTypography>
                <BasicModal />
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

