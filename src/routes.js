/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

// core components/views for Admin layout
import MainPage from "views/Main/Main.js";
import Sensor from "views/Sensor/Sensor.js";
import SmartLamb from "views/SmartLamp/SmartLamb.js";
import AirConditioner from "views/Air Conditioner/AirConditioner";
import LogOut from "views/LogOut/LogOut.js"

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//import LoginPage from 'views/LoginPage/LoginPage.js';

const dashboardRoutes = [
  {
    path: "/main",
    name: "Main", 
    icon: Dashboard,
    component: MainPage,
    layout: "/admin"
  },
  {
    path: "/lamp",
    name: "Akıllı Lamba", 
    icon: EmojiObjectsIcon,
    component: SmartLamb,
    layout: "/admin"
  },
  {
    path: "/sensor",
    name: "Sensör", 
    icon: SettingsRemoteIcon,
    component: Sensor,
    layout: "/admin"
  },
  {
    path: "/airconditioner",
    name: "Klima", 
    icon: AcUnitIcon,
    component: AirConditioner,
    layout: "/admin"
  },
  {
    path: "/logout",
    name: "Çıkış", 
    icon: ExitToAppIcon,
    component: LogOut,
    layout: "/admin"
  }
];

export default dashboardRoutes;
