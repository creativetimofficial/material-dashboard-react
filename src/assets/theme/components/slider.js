/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import boxShadow from "assets/theme/functions/boxShadow";

const { grey, white, black, info } = colors;
const { borderRadius, borderWidth } = borders;
const { sliderBoxShadow } = boxShadows;

const slider = {
  styleOverrides: {
    root: {
      width: "100%",

      "& .MuiSlider-active, & .Mui-focusVisible": {
        boxShadow: "none !important",
      },

      "& .MuiSlider-valueLabel": {
        color: black.main,
      },
    },

    rail: {
      height: pxToRem(2),
      background: grey[200],
      borderRadius: borderRadius.sm,
      opacity: 1,
    },

    track: {
      background: info.main,
      height: pxToRem(2),
      position: "relative",
      border: "none",
      borderRadius: borderRadius.lg,
      zIndex: 1,
    },

    thumb: {
      width: pxToRem(14),
      height: pxToRem(14),
      backgroundColor: white.main,
      zIndex: 10,
      boxShadow: sliderBoxShadow.thumb,
      border: `${borderWidth[1]} solid ${info.main}`,
      transition: "all 200ms linear",

      "&:hover": {
        boxShadow: "none",
      },

      "&:active": {
        transform: "translate(-50%, -50%) scale(1.4)",
      },

      "&.Mui-active": { boxShadow: boxShadow([0, 0], [0, 14], info.main, 0.16) },
    },
  },
};

export default slider;
