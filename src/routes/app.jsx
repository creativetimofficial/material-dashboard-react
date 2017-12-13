import Dashboard from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import Notifications from "views/Notifications/Notifications.jsx";

const appRoutes = [
    { path: "/dashboard", sidebarName: "Dashboard", navbarName: "Material Dashboard", icon: "dashboard", component: Dashboard },
    { path: "/user", sidebarName: "User Profile", navbarName: "Profile", icon: "person", component: UserProfile },
    { path: "/table", sidebarName: "Table List", navbarName: "Table List", icon: "content_paste", component: TableList },
    { path: "/typography", sidebarName: "Typography", navbarName: "Typography", icon: "library_books", component: Typography },
    { path: "/icons", sidebarName: "Icons", navbarName: "Icons", icon: "bubble_chart", component: Icons },
    { path: "/maps", sidebarName: "Maps", navbarName: "Map", icon: "location_on", component: Maps },
    { path: "/notifications", sidebarName: "Notifications", navbarName: "Notifications", icon: "notifications", component: Notifications },
    { redirect: true, path: "/", to: "/dashboard" }
];

export default appRoutes;
