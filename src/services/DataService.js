const DataService = (() => {
  // const BASE_URL = process.env.REACT_APP_API_ROOT;
  // const BASE_URL = 'http://localhost:3001';

  const RowInfo = [
    { cuit: '123', email: 'nico@pick.com', fantasy_name: 'Persiana', first_name: 'Nico', last_name: 'Pick', phone: '264444544' },
    { cuit: '1234', email: 'nico@pepe.com', fantasy_name: 'Carteles Nico', first_name: 'Nico', last_name: 'Pick', phone: '264444544' },
    { cuit: '12345678', email: 'nico@pepepepe.com', fantasy_name: 'Impresiones Impresionantes', first_name: 'Nico', last_name: 'Pick', phone: '264444544' },
    { cuit: '123456', email: 'lalalal@lalala.com', fantasy_name: 'Impresionantes', first_name: 'Nico', last_name: 'Pick', phone: '264444544' }
  ]

  const fetchUsers = async () => {
    return RowInfo
  }

  const PendingJobsInfo = [
    { first_name: 'Nico', last_name: 'Pick', price_cents: 20000 , status: "Pendiente" },
    { first_name: 'Juan', last_name: 'Pick', price_cents: 30000 , status: "Terminado" },
    { first_name: 'Jorge', last_name: 'Pick', price_cents: 40050 , status: "Demorado" },
    { first_name: 'Anders', last_name: 'Pick', price_cents: 20010 , status: "Pendiente" },
  ]
  const fetchPendingJobs = async () => {
    return PendingJobsInfo
  }

  const fetchUserData = async (id) => {
    return {
      first_name: "Juan Cruz",
      last_name: "Pick",
      email: "alecthompson@mail.com",
      fantasy_name: "Homadessss",
      cuit: "20383242135",
      phone: "990999090"
    }
  }

  const fetchUserJobs = async (id) => {
    return [
      {total: "0", fecha: "12/12/12", estado: "Terminado", info: "info", archivos: "Link"},
      {total: "0", fecha: "12/12/12", estado: "Terminado", info: "info", archivos: "Link"},
      {total: "0", fecha: "12/12/12", estado: "Terminado", info: "info", archivos: "Link"},
      {total: "0", fecha: "12/12/12", estado: "Terminado", info: "info", archivos: "Link"},
    ]
  }

  return {
    fetchPendingJobs: () => fetchPendingJobs(),
    fetchUsers: () => fetchUsers(),
    fetchUserData: (id) => fetchUserData(id),
    fetchUserJobs: (id) => fetchUserJobs(id)
  }
})();

export default DataService;
