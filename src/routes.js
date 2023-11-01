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
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import Reclamation from "layouts/reclamation";

import User from "layouts/user";

import Products from "layouts/products";
import Reviews from "layouts/reviews";
import Forums from "layouts/Forums";
import Messages from "layouts/Messages";
import Request from "layouts/request";
import Payment from "layouts/payment";import Contract from "layouts/contract";
import Inventory from "layouts/Inventory";

import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

const routes = [
  {
    type: "collapse",
    name: "Reclamation",
    key: "dashboard",
    icon: <Icon fontSize="small">Reclamation</Icon>,
    route: "/reclamation",
    component: <Reclamation />,
  },
  {
    type: "collapse",
    name: "Payment",
    key: "payment",
    icon: <Icon fontSize="small">Reclamation</Icon>,
    route: "/payment",
    component: <Payment />,
  },
  {
    type: "collapse",
    name: "User",
    key: "user",
    icon: <Icon fontSize="small">User</Icon>,
    route: "/user",
    component: <User />,
  },
  {
    type: "collapse",
    name: "Request",
    key: "request",
    icon: <Icon fontSize="small">Request</Icon>,
    route: "/request",
    component: <Request />,
  },
  {
    type: "collapse",
    name: "Products",
    key: "dashboard1",
    icon: <Icon fontSize="small">Products</Icon>,
    route: "/products",
    component: <Products />,
  },
  {
    type: "collapse",
    name: "Reviews",
    key: "Reviews",
    icon: <Icon fontSize="small">Reviews</Icon>,
    route: "/reviews",
    component: <Reviews />,
  },
  {
    type: "collapse",
    name: "Forums",
    key: "Forums",
    icon: <Icon fontSize="small">Forums</Icon>,
    route: "/forums",
    component: <Forums />,
  },
  {
    type: "collapse",
    name: "Messages",
    key: "Messages",
    icon: <Icon fontSize="small">Messages</Icon>,
    route: "/messages",
    component: <Messages />,
  },
  {
    type: "collapse",
    name: "contracts",
    key: "dashboard2",
    icon: <Icon fontSize="small">Contracts</Icon>,
    route: "/contracts",
    component: <Contract />,
  },
  {
    type: "collapse",
    name: "inventories",
    key: "dashboard3",
    icon: <Icon fontSize="small">Inventory</Icon>,
    route: "/inventories",
    component: <Inventory />,
  },
];

export default routes;
/**{
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/rtl",
    component: <RTL />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  }, */
