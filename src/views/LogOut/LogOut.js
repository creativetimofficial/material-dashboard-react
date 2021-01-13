import React from "react";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";
export default function LogOut() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
        <CircularProgress />
        <Typography  align="center"> Hesabınızdan çıkış yapılıyor. </Typography>
    </Grid>  
  );
}
