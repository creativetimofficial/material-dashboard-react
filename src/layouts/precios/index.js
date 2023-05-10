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
import React, { useState } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import Footer from "examples/Footer";
import PriceTable from "examples/Tables/PriceTable";

// Dashboard components
import bajadasSinPapel from "layouts/precios/data/bajadasSinPapel";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Wrapper from "layouts/Wrapper";

function Precios() {
  const categorias = bajadasSinPapel(false, "nuevo");

  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  var lista = [];
  categorias.forEach(categoria => {
    const title = <MDTypography>{categoria.paperSize}</MDTypography>;
    var gramajes = [];
    categoria.gramajes.forEach(elemento => {
      var rows = [];
      const columns = [
        { Header: "Cantidad", accessor: "cantidad", align: "center" },
        { Header: "4/0", accessor: "simpleFaz", align: "center" },
        { Header: "4/4", accessor: "dobleFaz", align: "center" }
      ];
      elemento.quantities.forEach(quantity => {
        rows.push(
          {
            "cantidad": <MDTypography variant="button" color="text" fontWeight="regular">{quantity.min}-{quantity.max}</MDTypography>,
            "simpleFaz": <MDTypography variant="button" color="text" fontWeight="bold">${quantity.fazes[0].price}</MDTypography>,
            "dobleFaz": <MDTypography variant="button" color="text" fontWeight="bold">${quantity.fazes[1].price}</MDTypography>
          });
      });
      gramajes.push(<Accordion expanded={expanded === elemento.gramaje + categoria.paperSize} onChange={handleChange(elemento.gramaje + categoria.paperSize)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {elemento.gramaje} grs.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PriceTable
            table={{ columns: columns, rows: rows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />
        </AccordionDetails>
      </Accordion>);

    });
    lista.push(
      <MDBox>
        <MDBox mx={2}
          mt={3}
          py={3}
          px={2}>
          <MDTypography variant="h6">
            {title}
          </MDTypography>
          {
            gramajes.map((gramaje) => { return gramaje }
            )
          }
        </MDBox>
      </MDBox>
    );
  });
  return (

    <Wrapper title="Lista de Precios">
      {
        lista
      }
      <Footer />
    </Wrapper>


  );
}


export default Precios;
