import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import MDBox from "components/MDBox";

import DataTable from "examples/Tables/DataTable";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MDTypography from "../../components/MDTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const jobsTableColumns = [
  { Header: "Fecha", accessor: "fecha", align: "center" },
  { Header: "Estado", accessor: "estado", align: "center" },
  { Header: "Total", accessor: "total", align: "left" },
  { Header: "Archivos", accessor: "archivos", align: "center" },
  { Header: "Info", accessor: "info", align: "center" },
]

const RowInfo = [
  {total: "0", fecha: "12/12/12", estado: "Terminado", info: "info", archivos: "Link"},
  {total: "0", fecha: "12/12/12", estado: "Terminado", info: "info", archivos: "Link"},
  {total: "0", fecha: "12/12/12", estado: "Terminado", info: "info", archivos: "Link"},
  {total: "0", fecha: "12/12/12", estado: "Terminado", info: "info", archivos: "Link"},
]

const Overview = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null);
  const [rows, setRows] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      // get...
      const usr = {
        first_name: "Juan Cruz",
        last_name: "Pick",
        email: "alecthompson@mail.com",
        fantasy_name: "Homadessss",
        cuit: "20383242135",
        phone: "990999090"
      }
      setUser(usr)
      console.log(id)
    }
    const fetchData = async () => {
      setRows(RowInfo)
    }

    fetchUserData();
    fetchData();
  }, [])

  return (
    <DashboardLayout>
      <ProfileInfoCard
        title="Información del Cliente"
        info={{
          empresa: user?.fantasy_name,
          nombre: `${user?.first_name} ${user?.last_name}`,
          CUIT: user?.cuit,
          teléfono: user?.phone,
          email: user?.email,
        }}
        social={[]}
        action={{ route: "", tooltip: "Editar Perfil" }}
        shadow={false}
      />
      <MDBox pt={3}>
        <DataTable
          table={{ columns: jobsTableColumns, rows: rows }}
          isSorted={false}
          entriesPerPage={false}
          showTotalEntries={false}
          noEndBorder
        />
      </MDBox>
    </DashboardLayout>
  );
}


const Wrapper = ({children, title}) => {
  return (
    <MDBox py={3}>
      <MDBox mt={4.5}>
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
                {title}
              </MDTypography>
            </MDBox>
            {children}
          </Card>
        </Grid>
      </MDBox>
    </MDBox>
  )
}

export default Overview;
