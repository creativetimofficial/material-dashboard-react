/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React base styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";

// Material Dashboard 2 PRO React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { background } = colors;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      width: pxToRem(250),
      whiteSpace: "nowrap",
      border: "none",
    },

    paper: {
      width: pxToRem(250),
      backgroundColor: background.sidenav,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: pxToRem(16),
      borderRadius: borderRadius.xl,
      border: "none",
    },

    paperAnchorDockedLeft: {
      borderRight: "none",
    },
  },
};
