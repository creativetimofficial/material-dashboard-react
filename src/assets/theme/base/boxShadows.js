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

/**
 * The base box-shadow styles for the Material Dashboard 2 React.
 * You can add new box-shadow using this file.
 * You can customized the box-shadow for the entire Material Dashboard 2 React using thie file.
 */

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React Helper Functions
import boxShadow from "assets/theme/functions/boxShadow";

const { black, white, tabs, coloredShadows } = colors;

const boxShadows = {
  xs: boxShadow([0, 2], [9, -5], black.main, 0.15),
  sm: boxShadow([0, 5], [10, 0], black.main, 0.12),
  md: `${boxShadow([0, 4], [6, -1], black.main, 0.1)}, ${boxShadow(
    [0, 2],
    [4, -1],
    black.main,
    0.06
  )}`,
  lg: `${boxShadow([0, 10], [15, -3], black.main, 0.1)}, ${boxShadow(
    [0, 4],
    [6, -2],
    black.main,
    0.05
  )}`,
  xl: `${boxShadow([0, 20], [25, -5], black.main, 0.1)}, ${boxShadow(
    [0, 10],
    [10, -5],
    black.main,
    0.04
  )}`,
  xxl: boxShadow([0, 20], [27, 0], black.main, 0.05),
  inset: boxShadow([0, 1], [2, 0], black.main, 0.075, "inset"),
  colored: {
    primary: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.primary,
      0.4
    )}`,
    secondary: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.secondary,
      0.4
    )}`,
    info: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.info,
      0.4
    )}`,
    success: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.success,
      0.4
    )}`,
    warning: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.warning,
      0.4
    )}`,
    error: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.error,
      0.4
    )}`,
    light: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.light,
      0.4
    )}`,
    dark: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.dark,
      0.4
    )}`,
  },

  navbarBoxShadow: `${boxShadow([0, 0], [1, 1], white.main, 0.9, "inset")}, ${boxShadow(
    [0, 20],
    [27, 0],
    black.main,
    0.05
  )}`,
  sliderBoxShadow: {
    thumb: boxShadow([0, 1], [13, 0], black.main, 0.2),
  },
  tabsBoxShadow: {
    indicator: boxShadow([0, 1], [5, 1], tabs.indicator.boxShadow, 1),
  },
};

export default boxShadows;
