/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import boxShadow from "assets/theme-dark/functions/boxShadow";

const { white } = colors;

const stepIcon = {
  styleOverrides: {
    root: {
      background: "#9fc9ff",
      fill: "#9fc9ff",
      stroke: "#9fc9ff",
      strokeWidth: pxToRem(10),
      width: pxToRem(13),
      height: pxToRem(13),
      borderRadius: "50%",
      zIndex: 99,
      transition: "all 200ms linear",

      "&.Mui-active": {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
      },

      "&.Mui-completed": {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
      },
    },
  },
};

export default stepIcon;
