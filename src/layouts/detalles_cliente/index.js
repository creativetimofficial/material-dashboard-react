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

// @mui icons

// Material Dashboard 2 React components

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// Overview page components

// Data

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ProfileInfoCard
        title="Informacion del Cliente"
        description=""
        info={{
          empresa: "Homade",
          nomrbe: "Juan Cruz Riera",
          CUIT: "20383242135",
          direccion: "BP Habitat, lote 16",
          telefono: "(11) 23661750",
          email: "alecthompson@mail.com",
        }}
        social={[]}
        action={{ route: "", tooltip: "Edit Profile" }}
        shadow={false}
      />
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
