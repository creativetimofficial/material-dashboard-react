import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import AuthService from "APIs/AuthService"
//import routes from "routes.js";


//import { Router, Route, Switch, Redirect } from "react-router-dom";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage() {
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const [mailError, setMailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const classes = useStyles();
  const Sumbit = () =>{
    var isOkay = true;
    if(mail == ""){
      isOkay=false;
      setMailError(true)
    }
    if(password == ""){
      setPasswordError(true)
      isOkay=false;
    }
    if(isOkay){
      setPasswordError(false)
      setMailError(false)
      AuthService.LoginAccount(mail,password).then((response)=>{
        
        if(response == null){

        }
        else if(response.statusCode != 200){

        }
        else{
         
        }
      });
    }
   
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Giriş Ekranı
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>      
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={mailError}
                onChange={(event) => {setMail(event.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                error={passwordError}
                autoComplete="current-password"
                onChange={(event) => {setPassword(event.target.value)}}
              />
            </Grid>

          </Grid>
          <br></br>
          <Button           
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}          
            onClick={Sumbit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}