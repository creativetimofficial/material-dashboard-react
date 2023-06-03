import { Card, Grid } from "@mui/material"
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import DataTable from "examples/Tables/DataTable"
import DashboardNavbar from "examples/Navbars/DashboardNavbar"
import React, { useEffect, useState } from "react"

function Countress() {
  const [admin, setAdmin] = useState([])
  // const [division, setDivision] = useState([])

  //  Admin Divisions
  // useEffect(async () => {
  //   const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions"
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "83bd21f0aemshd5af6d15ff0ea43p1391d3jsnf3d61450bbe3",
  //       "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  //     },
  //   }

  //   try {
  //     const response = await fetch(url, options)
  //     const result = await response.json()
  //     setAdmin(result.data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }, [])

  //  Admin Divisions Near Divisions
  // useEffect(async () => {
  //   const url =
  //     "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions/Q104994/nearbyDivisions?radius=100"
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "83bd21f0aemshd5af6d15ff0ea43p1391d3jsnf3d61450bbe3",
  //       "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  //     },
  //   }

  //   try {
  //     const response = await fetch(url, options)
  //     const result = await response.json()
  //     setAdmin(result.data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }, [])


useEffect(async () => {
  const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/locations/33.832213-118.387099/nearbyDivisions?radius=100';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '83bd21f0aemshd5af6d15ff0ea43p1391d3jsnf3d61450bbe3',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    setAdmin(result.data);
  } catch (error) {
    console.error(error);
  }
},[])
console.log(admin)
  //  Columns port
  const columns = [
    { Header: "United Arab Emirates", accessor: "country", width: "10%", align: "left" },
    { Header: "Afg'aniston", accessor: "countryCode", width: "10%", align: "left" },
    { Header: "Afg'aniston", accessor: "name", width: "10%", align: "left" },
    { Header: "Afg'aniston", accessor: "region", width: "10%", align: "left" },
    { Header: "Afg'aniston", accessor: "regionCode", width: "10%", align: "left" },
    { Header: "Afg'aniston", accessor: "regionWdId", width: "10%", align: "left" },
    { Header: "Afg'aniston", accessor: "wikiDataId", width: "10%", align: "left" },
  ]
  const rows = admin?.map((data) => ({
    country: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {data.country}
      </MDTypography>
    ),
    countryCode: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {data.countryCode}
      </MDTypography>
    ),
    name: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {data.name}
      </MDTypography>
    ),
    region: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {data.region}
      </MDTypography>
    ),
    regionCode: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {data.regionCode}
      </MDTypography>
    ),
    regionWdId: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {data.regionWdId}
      </MDTypography>
    ),
    wikiDataId: (
      <MDTypography component="a" href="#" variant="caption" color="dark" fontWeight="medium">
        {data.wikiDataId}
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
                  United Arab Emirates
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

export default Countress
