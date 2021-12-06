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

// Material Dashboard 2 PRO React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

// Material Dashboard 2 PRO React base styles
import colors from "assets/theme-dark/base/colors";
import boxShadows from "assets/theme-dark/base/boxShadows";
import borders from "assets/theme-dark/base/borders";

const { transparent } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: md,
      padding: pxToRem(8),
      borderRadius: borderRadius.md,
    },
  },
};
