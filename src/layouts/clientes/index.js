import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import MDBox from "../../components/MDBox";
import DataTable from "../../examples/Tables/DataTable";
import {useEffect, useState} from "react";
import MDTypography from "../../components/MDTypography";
import MDButton from "../../components/MDButton";
import {Link} from "react-router-dom";

const TableColumns = [
  { Header: "Nombre", accessor: "first_name", align: "center" },
  { Header: "Apellido", accessor: "last_name", align: "center" },
  { Header: "Email", accessor: "email", align: "center" },
  { Header: "Teléfono", accessor: "phone", align: "center" },
  { Header: "CUIT", accessor: "cuit", align: "center" },
  { Header: "Nombre Fantasia", accessor: "fantasy_name", align: "center" },
  { Header: "", accessor: "view", align: "right" },
]


const RowInfo = [
  { cuit: 'lalalal', email: 'lalalal', fantasy_name: 'lalalal', first_name: 'lalalal', last_name: 'lalalal', phone: 'lalalal' },
  { cuit: 'lalalal', email: 'dsa', fantasy_name: 'lalalal', first_name: 'lalalal', last_name: 'lalalal', phone: 'lalalal' },
  { cuit: 'lalalal', email: 'lalalal', fantasy_name: 'lalalal', first_name: 'lalalal', last_name: 'lalalal', phone: 'lalalal' },
  { cuit: 'lalalal', email: 'lalalal', fantasy_name: 'lalalal', first_name: 'lalalal', last_name: 'lalalal', phone: 'lalalal' }
]

const RowFormatter = (row) => (
    {
      cuit: (<MDTypography  variant="button" color="text">{row.cuit}</MDTypography>),
      email: (<MDTypography  variant="caption" color="text" fontWeight="medium">{row.email}</MDTypography>),
      fantasy_name: (<MDTypography  variant="button" color="text" fontWeight="medium">{row.fantasy_name}</MDTypography>),
      first_name: (<MDTypography  variant="button" color="text" fontWeight="medium">{row.first_name}</MDTypography>),
      last_name: (<MDTypography  variant="button" color="text" fontWeight="medium">{row.last_name}</MDTypography>),
      phone: (<MDTypography variant="button" color="text" fontWeight="medium">{row.phone}</MDTypography>),
      view: (<Link to={'/cliente/123123'}><MDButton color={"dark"}>Ver</MDButton></Link>)
    }
  )

const Clientes = () => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    const formattedRows = RowInfo.map(r => RowFormatter(r))
    setRows(formattedRows)
  }, [])

  return (
    <DashboardLayout>
      <MDBox pt={3}>
        <DataTable
          table={{ columns: TableColumns, rows: rows }}
          isSorted={false}
          entriesPerPage={false}
          showTotalEntries={false}
          canSearch={true}
          noEndBorder
        />
      </MDBox>
    </DashboardLayout>
  )
}

export default Clientes
