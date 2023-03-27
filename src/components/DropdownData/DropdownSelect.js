// import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from "@material-ui/core";
// import React, { useState } from "react";

// function DropdownSelect() {
//   const [selected, setSelected] = useState("");

//   const selectionChangeHandler = (event) => {
//     setSelected(event.target.value);
//   };

//   return (
//     <FormControl style={{ marginTop: 100, marginLeft: 100 }}>
//       <InputLabel>Months</InputLabel>
//       <Select value={selected} onChange={selectionChangeHandler}>
//         <MenuItem value={1}>Cetaphil</MenuItem>
//         <MenuItem value={2}>Aveeno</MenuItem>
//         <MenuItem value={3}>QV Baby</MenuItem>
//       </Select>
//       <FormHelperText>Select a brand</FormHelperText>
//     </FormControl>
//   );
// }

// export default DropdownSelect;
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Select, FormControl } from "@material-ui/core";
import React, { useEffect, useState } from "react";

// import FetchData from "layouts/apitable/data/FetchData";
// import Fetchaveno from "layouts/Aveno/Fetchavenodata";
// import Fetchapidata from "layouts/tables/data/fetchiapidata";
// import DataTable from "examples/Tables/DataTable";
// import FetchQvBabyData from "layouts/QVBaby/Fetchqvbabydata";

function ProductData() {
  const [brand, setBrand] = useState("select brand");

  const [cetaphil, setCetaphil] = useState("false");
  const [aveeno, setAveeno] = useState("false");
  const [qvbaby, setQvbaby] = useState("false");

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    brand === "cetaphil" ? setCetaphil(true) : setCetaphil(false);
    // eslint-disable-next-line no-unused-expressions
    brand === "aveeno" ? setAveeno(true) : setAveeno(false);
    // eslint-disable-next-line no-unused-expressions
    brand === "qvbaby" ? setQvbaby(true) : setQvbaby(false);
  }, [brand]);

  const selectionChangeHandler = (event) => {
    setBrand(event.target.value);
  };

  const makeFirstLetterCapital = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const renderResult = () => {
    let result;
    // eslint-disable-next-line no-unused-expressions
    brand === "selectProductBrand"
      ? (result = "select your brand")
      : (result = makeFirstLetterCapital(brand));
    return result;
  };

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
                <MDTypography variant="h6" color="white">
                  <FormControl style={{ marginTop: 10, marginLeft: 10 }}>
                    {/* <InputLabel>products</InputLabel> */}
                    <h1>{renderResult()}</h1>
                    <Select value={brand} onChange={selectionChangeHandler}>
                      <option value="selectProductData">Select your product brand</option>
                      <option value="cetaphil">Cetaphil</option>
                      <option value="aveeno">Aveeno</option>
                      <option value="qvbaby">QvBaby</option>
                    </Select>
                  </FormControl>{" "}
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {cetaphil}
                {aveeno}
                {qvbaby}
                {/* <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                /> */}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProductData;
