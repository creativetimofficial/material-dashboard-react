import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import MDBox from "components/MDBox";

import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MDTypography from "../../components/MDTypography";
import { Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, Switch, Typography } from "@mui/material";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';




const Overview = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      // get...
      const usr = {
        first_name: "Juan Cruz",
        last_name: "Pick",
        email: "alecthompson@mail.com",
        fantasy_name: "Homade",
        cuit: "20383242135",
        phone: "990999090"
      }
      setUser(usr)
      console.log(id)
    }

    fetchUserData();
  }, []);
  const [gramaje, setGramaje] = React.useState('');

  const handleChange = (event) => {
    setGramaje(event.target.value);
  };

  return (
    <DashboardLayout>
      <Card>
        <CardHeader title="Trabajo Nuevo" />
        <CardContent>
          <MDBox mb={2}>
            <MDTypography variant="h6" component="div">Usuario</MDTypography>
            <MDTypography variant="body2">Juan Cruz</MDTypography>
          </MDBox>

          <FormGroup>
            <MDBox >
              <Grid container spacing={1}>

                <Grid item xs={12} md={6} xl={4} spacing={1}>
                  <MDBox mb={2}>
                    <MDBox>
                      <FormLabel>Copias</FormLabel>
                    </MDBox>
                    <MDBox>
                      <MDInput type="number" label="Cantidad de Copias" />
                    </MDBox>
                  </MDBox>
                  <MDBox mb={2}>
                    <FormLabel id="tipo-papel-label">Tipo de Papel</FormLabel>
                    <RadioGroup aria-labelledby="tipo-papel-label" name="tipo-papel" defaultValue={"Sin Papel"}>
                      <FormControlLabel value="A4" control={<Radio />} label="A4" />
                      <FormControlLabel value="A3" control={<Radio />} label="A3" />
                      <FormControlLabel value="Troquelado" control={<Radio />} label="Troquelado" />
                      <FormControlLabel value="Banner" control={<Radio />} label="Banner" />
                      <FormControlLabel value="Sin Papel" control={<Radio />} label="Sin Papel" />
                    </RadioGroup>
                  </MDBox>
                </Grid>


                <Grid item xs={12} md={6} xl={4} mb={2}>
                  <MDBox mb={2}>
                    <FormLabel>Gramaje y Laminado</FormLabel>
                    <MDBox >
                      <FormControl sx={{ minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-label">g y l</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={gramaje}
                          sx={{ minHeight: 50 }}
                          label="gramaje"
                          onChange={handleChange}
                        >
                          <MenuItem value={"350m"}>350 Grs. Mate</MenuItem>
                          <MenuItem value={"350b"}>350 Grs. Brillante</MenuItem>
                          <MenuItem value={"300m"}>300 Grs. Mate</MenuItem>
                          <MenuItem value={"300b"}>300 Grs. Brillante</MenuItem>
                          <MenuItem value={"250m"}>250 Grs. Mate</MenuItem>
                          <MenuItem value={"250b"}>250 Grs. Brillante</MenuItem>
                          <MenuItem value={"150m"}>150 Grs. Mate</MenuItem>
                          <MenuItem value={"150b"}>150 Grs. Brillante</MenuItem>
                          <MenuItem value={"115m"}>115 Grs. Mate</MenuItem>
                          <MenuItem value={"115b"}>115 Grs. Brillante</MenuItem>
                          <MenuItem value={"obra"}>Obra 90 Grs.</MenuItem>
                          <MenuItem value={"autoadcs"}>Autoad. con Split</MenuItem>
                          <MenuItem value={"autoadss"}>Autoad. sin Split</MenuItem>
                          <MenuItem value={"OPPb"}>OPP Blanco</MenuItem>
                          <MenuItem value={"OPPt"}>OPP Transparente</MenuItem>
                        </Select>
                      </FormControl>
                    </MDBox>
                  </MDBox>
                  <MDBox mb={2}>
                    <FormLabel >Doble faz</FormLabel>
                    <FormControlLabel control={<Switch defaultChecked />} />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDBox>
                      <FormLabel >Fecha limite de entrega</FormLabel>
                    </MDBox>
                    <MDBox>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                      </LocalizationProvider>
                    </MDBox>
                  </MDBox>
                </Grid>

              </Grid>
            </MDBox>

          </FormGroup>

        </CardContent>
        <CardActions>
          <MDButton color={"primary"}>Crear</MDButton>
        </CardActions>
      </Card>
    </DashboardLayout>
  );
}

export default Overview;
