import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import MDBox from "../../components/MDBox";
import DataTable from "../../examples/Tables/DataTable";
import {useEffect, useState} from "react";
import MDTypography from "../../components/MDTypography";
import MDButton from "../../components/MDButton";
import {Link} from "react-router-dom";
import DataService from "../../services/DataService";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Wrapper from "../Wrapper";


const TableColumns = [
  { Header: "Nombre y Apellido", accessor: "name", align: "center" },
  { Header: "Email", accessor: "email", align: "center" },
  { Header: "Teléfono", accessor: "phone", align: "center" },
  { Header: "CUIT", accessor: "cuit", align: "center" },
  { Header: "Nombre Fantasia", accessor: "fantasy_name", align: "left" },
  { Header: "", accessor: "view", align: "right" },
]

const RowFormatter = (row) => (
    {
      cuit: (<MDTypography  variant="button" color="text">{row.cuit}</MDTypography>),
      email: (<MDTypography  variant="caption" color="text" fontWeight="medium">{row.email}</MDTypography>),
      fantasy_name: (<MDTypography  variant="button" color="text" fontWeight="medium">{row.fantasy_name}</MDTypography>),
      name: (<MDTypography  variant="button" color="text" fontWeight="medium">{row.first_name} {row.last_name}</MDTypography>),
      phone: (<MDTypography variant="button" color="text" fontWeight="medium">{row.phone}</MDTypography>),
      view: (<Link to={'/cliente/123123'}><MDButton color={"dark"}>Ver</MDButton>
      </Link>)
    }
  )

const Clientes = () => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    const getInfo = async () => {
      const formattedRows = await DataService.fetchUsers()
      setRows(formattedRows.map(r => RowFormatter(r)))
    };

    getInfo()
  }, [])

  return (
    <Wrapper title={"Clientes"}>
      <DataTable
        table={{ columns: TableColumns, rows: rows }}
        isSorted={false}
        entriesPerPage={false}
        showTotalEntries={false}
        canSearch={true}
        noEndBorder
      />
    </Wrapper>
  )
}

export default Clientes
