import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Dashboard components
import projectsTableData from "layouts/trabajosPendientes/data/projectsTableData";
import {useEffect, useState} from "react";
import DataService from "../../services/DataService";
import InfoIcon from "@mui/icons-material/Info";
import DownloadIcon from "@mui/icons-material/Download";
import Wrapper from "../Wrapper";


const TableColumns = [
  { Header: "cliente", accessor: "cliente", align: "left" },
  { Header: "fecha", accessor: "fecha", align: "center" },
  { Header: "estado", accessor: "estado", align: "center" },
  { Header: "total", accessor: "total", align: "left" },
  { Header: "archivos", accessor: "archivos", align: "center" },
  { Header: "info", accessor: "info", align: "center" },
]

const formatPrice = (priceCents) => {
  try {
    return (priceCents / 100).toLocaleString("es-AR", {style:"currency", currency:"ARS"})
  } catch (e){
    return " - "
  }
}

const RowFormatter = (row) => ({
  cliente: (<MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>{row.first_name} {row.last_name}</MDTypography>),
  total: (<MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">{formatPrice(row.price_cents)}</MDTypography>),
  fecha: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">{row.due_date || '-'}</MDTypography>),
  estado: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">{row.status}</MDTypography>),
  info: (<MDTypography component="a" href="#" color="text"><InfoIcon>more_vert</InfoIcon></MDTypography>),
  archivos: (<MDTypography component="a" href="#" color="text"><DownloadIcon /></MDTypography>),
})


function Dashboard() {
  const { columns: pColumns, rows: pRows } = projectsTableData();


  // ACA HACER EL USEEFFECT

  const [rows, setRows] = useState([])

  useEffect(() => {
    const getInfo = async () => {
      const formattedRows = await DataService.fetchPendingJobs()
      const lala = formattedRows.map(r => RowFormatter(r))
      setRows(lala)
    };

    getInfo()
  }, [])

  return (
    <Wrapper title={"Trabajos Pendientes"}>
      <DataTable
        table={{ columns: TableColumns, rows: rows }}
        isSorted={false}
        entriesPerPage={false}
        showTotalEntries={false}
        canSearch={true}
        noEndBorder
      />
    </Wrapper>
  );
}

export default Dashboard;
