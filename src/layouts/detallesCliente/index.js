import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import MDBox from "components/MDBox";

import DataTable from "examples/Tables/DataTable";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import DataService from "../../services/DataService";
import Wrapper from "../Wrapper";

const jobsTableColumns = [
  { Header: "Fecha", accessor: "fecha", align: "center" },
  { Header: "Estado", accessor: "estado", align: "center" },
  { Header: "Total", accessor: "total", align: "left" },
  { Header: "Archivos", accessor: "archivos", align: "center" },
  { Header: "Info", accessor: "info", align: "center" },
]

const Overview = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null);
  const [userJobs, setUserJobs] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await DataService.fetchUserData(1)
      setUser(userData)
    }

    const fetchData = async () => {
      const userJobs = await DataService.fetchUserJobs(1)
      setUserJobs(userJobs)
    }

    fetchUserData();
    fetchData();
  }, [])

  return (
    <Wrapper title={"Info Cliente"}>
      <>
        <ProfileInfoCard
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
            table={{ columns: jobsTableColumns, rows: userJobs }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />
        </MDBox>
      </>
    </Wrapper>
  );
}

export default Overview;
