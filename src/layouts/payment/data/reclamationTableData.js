/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import React, { useEffect, useState } from "react";
import axios from "axios";
// Images
import dd from "assets/images/dd.png";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import Reclamation from "..";

export default function data() {
  const [reclamations, setReclamations] = useState([]);

  useEffect(() => {
    // Utilisez useEffect pour effectuer la requête lorsque le composant est monté
    axios
      .get("http://localhost:8005/api/payment/getall")
      .then((response) => {
        // Mettez à jour l'état avec les données de la réponse de l'API
        setReclamations(response.data);
      })
      .catch((error) => {
        // Gérez les erreurs ici, par exemple, en les affichant à l'utilisateur
        console.error("Erreur lors de la récupération des données de l'API", error);
      });
  }, []);
  console.log(reclamations);
  const ReclamationContent = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar image={dd} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );
  const formatRows = reclamations.map((reclamation) => ({
    reclamationInfo: (
      <ReclamationContent
        image={dd}
        name={reclamation.userName.value}
        email={reclamation.userEmail.value}
      />
    ),
    description: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {reclamation.Price.value}
      </MDTypography>
    ),

    action: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Edit
      </MDTypography>
    ),
  }));

  console.log(reclamations);

  return {
    columns: [
      { Header: "reclamationInfo", accessor: "reclamationInfo", width: "45%", align: "left" },
      { Header: "Price", accessor: "description", align: "left" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: formatRows,
  };
}
