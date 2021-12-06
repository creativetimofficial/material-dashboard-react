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

// Material Dashboard 2 PRO React Button Styles
import root from "assets/theme/components/button/root";
import contained from "assets/theme/components/button/contained";
import outlined from "assets/theme/components/button/outlined";
import text from "assets/theme/components/button/text";

export default {
  defaultProps: {
    disableRipple: false,
  },
  styleOverrides: {
    root: { ...root },
    contained: { ...contained.base },
    containedSizeSmall: { ...contained.small },
    containedSizeLarge: { ...contained.large },
    containedPrimary: { ...contained.primary },
    containedSecondary: { ...contained.secondary },
    outlined: { ...outlined.base },
    outlinedSizeSmall: { ...outlined.small },
    outlinedSizeLarge: { ...outlined.large },
    outlinedPrimary: { ...outlined.primary },
    outlinedSecondary: { ...outlined.secondary },
    text: { ...text.base },
    textSizeSmall: { ...text.small },
    textSizeLarge: { ...text.large },
    textPrimary: { ...text.primary },
    textSecondary: { ...text.secondary },
  },
};
