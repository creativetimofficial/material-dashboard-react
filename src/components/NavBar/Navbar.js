import React from "react";
import { Link } from "react-router-dom";
import { AppBar, IconButton, Typography, Toolbar, Stack, Button } from "@mui/material";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

function NavigationBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <PriceCheckIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Price Match App
        </Typography>
        <Stack direction="row" spacing={6}>
          <Button color="inherit">
            <Link to="/">Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/">About us</Link>
          </Button>
          <Button color="inherit">
            <Link to="/">Contact Us</Link>
          </Button>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default NavigationBar;
