/**
=========================================================
* Material Dashboard 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

// Material Dashboard 2 PRO React base styles
import colors from "assets/theme-dark/base/colors";
import breakpoints from "assets/theme-dark/base/breakpoints";
import typography from "assets/theme-dark/base/typography";
import boxShadows from "assets/theme-dark/base/boxShadows";
import borders from "assets/theme-dark/base/borders";
import globals from "assets/theme-dark/base/globals";

// Material Dashboard 2 PRO React helper functions
import boxShadow from "assets/theme-dark/functions/boxShadow";
import hexToRgb from "assets/theme-dark/functions/hexToRgb";
import linearGradient from "assets/theme-dark/functions/linearGradient";
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

// Material Dashboard 2 React components base styles for @mui material components
import sidenav from "assets/theme-dark/components/sidenav";
import list from "assets/theme-dark/components/list";
import listItem from "assets/theme-dark/components/list/listItem";
import listItemText from "assets/theme-dark/components/list/listItemText";
import card from "assets/theme-dark/components/card";
import cardMedia from "assets/theme-dark/components/card/cardMedia";
import cardContent from "assets/theme-dark/components/card/cardContent";
import button from "assets/theme-dark/components/button";
import iconButton from "assets/theme-dark/components/iconButton";
import input from "assets/theme-dark/components/form/input";
import inputLabel from "assets/theme-dark/components/form/inputLabel";
import inputOutlined from "assets/theme-dark/components/form/inputOutlined";
import textField from "assets/theme-dark/components/form/textField";
import menu from "assets/theme-dark/components/menu";
import menuItem from "assets/theme-dark/components/menu/menuItem";
import switchButton from "assets/theme-dark/components/form/switchButton";
import divider from "assets/theme-dark/components/divider";
import tableContainer from "assets/theme-dark/components/table/tableContainer";
import tableHead from "assets/theme-dark/components/table/tableHead";
import tableCell from "assets/theme-dark/components/table/tableCell";
import linearProgress from "assets/theme-dark/components/linearProgress";
import breadcrumbs from "assets/theme-dark/components/breadcrumbs";
import slider from "assets/theme-dark/components/slider";
import avatar from "assets/theme-dark/components/avatar";
import tooltip from "assets/theme-dark/components/tooltip";
import appBar from "assets/theme-dark/components/appBar";
import tabs from "assets/theme-dark/components/tabs";
import tab from "assets/theme-dark/components/tabs/tab";
import stepper from "assets/theme-dark/components/stepper";
import step from "assets/theme-dark/components/stepper/step";
import stepConnector from "assets/theme-dark/components/stepper/stepConnector";
import stepLabel from "assets/theme-dark/components/stepper/stepLabel";
import stepIcon from "assets/theme-dark/components/stepper/stepIcon";
import select from "assets/theme-dark/components/form/select";
import formControlLabel from "assets/theme-dark/components/form/formControlLabel";
import formLabel from "assets/theme-dark/components/form/formLabel";
import checkbox from "assets/theme-dark/components/form/checkbox";
import radio from "assets/theme-dark/components/form/radio";
import autocomplete from "assets/theme-dark/components/form/autocomplete";
import container from "assets/theme-dark/components/container";
import popover from "assets/theme-dark/components/popover";
import buttonBase from "assets/theme-dark/components/buttonBase";
import icon from "assets/theme-dark/components/icon";
import svgIcon from "assets/theme-dark/components/svgIcon";
import link from "assets/theme-dark/components/link";
import dialog from "assets/theme-dark/components/dialog";
import dialogTitle from "assets/theme-dark/components/dialog/dialogTitle";
import dialogContent from "assets/theme-dark/components/dialog/dialogContent";
import dialogContentText from "assets/theme-dark/components/dialog/dialogContentText";
import dialogActions from "assets/theme-dark/components/dialog/dialogActions";

export default createTheme({
  direction: "rtl",
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
