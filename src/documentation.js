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
// Getting started
import Tutorial from "layouts/Documentation/Sections/Tutorial.js";
import RoutingSystem from "layouts/Documentation/Sections/RoutingSystem.js";
import Variables from "layouts/Documentation/Sections/Variables.js";
import Styles from "layouts/Documentation/Sections/Styles.js";
import LintCommands from "layouts/Documentation/Sections/LintCommands.js";
import BuildTools from "layouts/Documentation/Sections/BuildTools.js";
import AspNet from "layouts/Documentation/Sections/AspNet.js";

// Components
import Buttons from "layouts/Documentation/Sections/Buttons.js";
import Cards from "layouts/Documentation/Sections/Cards.js";
import CheckboxRadio from "layouts/Documentation/Sections/CheckboxRadio.js";
import Dropdown from "layouts/Documentation/Sections/Dropdown.js";
import Icons from "layouts/Documentation/Sections/Icons.js";
import Inputs from "layouts/Documentation/Sections/Inputs.js";
import Navigation from "layouts/Documentation/Sections/Navigation.js";
import Notifications from "layouts/Documentation/Sections/Notifications.js";
import Sidebar from "layouts/Documentation/Sections/Sidebar.js";
import Tables from "layouts/Documentation/Sections/Tables.js";
import Tabs from "layouts/Documentation/Sections/Tabs.js";
import Tasks from "layouts/Documentation/Sections/Tasks.js";
import Typography from "layouts/Documentation/Sections/Typography.js";
import Tooltips from "layouts/Documentation/Sections/Tooltips.js";

// Plugins
import GoogleMaps from "layouts/Documentation/Sections/GoogleMaps.js";

const docsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/tutorial",
    routes: [
      {
        path: "/documentation/tutorial",
        name: "Tutorial",
        component: Tutorial,
      },
      {
        path: "/documentation/routing-system",
        name: "RoutingSystem",
        component: RoutingSystem,
      },
      {
        path: "/documentation/variables",
        name: "Variables",
        component: Variables,
      },
      { path: "/documentation/styles", name: "Styles", component: Styles },
      {
        path: "/documentation/lint-commands",
        name: "Lint",
        component: LintCommands,
      },
      {
        path: "/documentation/build-tools",
        name: "Build Tools",
        component: BuildTools,
      },
      {
        path: "/documentation/asp-net",
        name: "Asp.Net Tutorial",
        component: AspNet,
      },
    ],
  },
  {
    name: "Components",
    path: "/documentation/buttons",
    routes: [
      { path: "/documentation/buttons", name: "Buttons", component: Buttons },
      { path: "/documentation/cards", name: "Cards", component: Cards },
      {
        path: "/documentation/checkbox-radio",
        name: "CheckboxRadio",
        component: CheckboxRadio,
      },
      {
        path: "/documentation/dropdown",
        name: "Dropdown",
        component: Dropdown,
      },
      { path: "/documentation/icons", name: "Icons", component: Icons },
      { path: "/documentation/inputs", name: "Inputs", component: Inputs },
      {
        path: "/documentation/navigation",
        name: "Navigation",
        component: Navigation,
      },
      {
        path: "/documentation/notifications",
        name: "Notifications",
        component: Notifications,
      },
      { path: "/documentation/sidebar", name: "Sidebar", component: Sidebar },
      { path: "/documentation/tables", name: "Tables", component: Tables },
      { path: "/documentation/tabs", name: "Tabs", component: Tabs },
      { path: "/documentation/tasks", name: "Tasks", component: Tasks },
      {
        path: "/documentation/tooltips",
        name: "Tooltips",
        component: Tooltips,
      },
      {
        path: "/documentation/typography",
        name: "Typography",
        component: Typography,
      },
    ],
  },
  {
    name: "Plugins",
    path: "/documentation/charts",
    routes: [
      {
        path: "/documentation/google-maps",
        name: "GoogleMaps",
        component: GoogleMaps,
      },
    ],
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/tutorial" },
];

export default docsRoutes;
