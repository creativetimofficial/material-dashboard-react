// @material-ui/icons
import GraphicEq from "@material-ui/icons/GraphicEq";
import Timeline from "@material-ui/icons/Timeline";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import FullGraph from "views/FullGraph/FullGraph.jsx";
const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Full Graph",
    navbarName: "Full Graph",
    icon: Timeline,
    component: FullGraph
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
