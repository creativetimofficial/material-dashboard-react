import Tutorial from "containers/Documentation/Sections/Tutorial.jsx";
import RoutingSystem from "containers/Documentation/Sections/RoutingSystem.jsx";
import Variables from "containers/Documentation/Sections/Variables.jsx";
import Styles from "containers/Documentation/Sections/Styles.jsx";
import Buttons from "containers/Documentation/Sections/Buttons.jsx";
import Cards from "containers/Documentation/Sections/Cards.jsx";
import CheckboxRadio from "containers/Documentation/Sections/CheckboxRadio.jsx";
import Dropdown from "containers/Documentation/Sections/Dropdown.jsx";
import GoogleMaps from "containers/Documentation/Sections/GoogleMaps.jsx";
import Icons from "containers/Documentation/Sections/Icons.jsx";
import Inputs from "containers/Documentation/Sections/Inputs.jsx";
import Navigation from "containers/Documentation/Sections/Navigation.jsx";
import Notifications from "containers/Documentation/Sections/Notifications.jsx";
import Sidebar from "containers/Documentation/Sections/Sidebar.jsx";
import Tables from "containers/Documentation/Sections/Tables.jsx";
import Tasks from "containers/Documentation/Sections/Tasks.jsx";
import Typography from "containers/Documentation/Sections/Typography.jsx";
import Tooltips from "containers/Documentation/Sections/Tooltips.jsx";

const docRoutes = [
    { path: "/documentation/tutorial", name: "Tutorial", component: Tutorial },
    { path: "/documentation/routing-system", name: "RoutingSystem", component: RoutingSystem },
    { path: "/documentation/variables", name: "Variables", component: Variables },
    { path: "/documentation/styles", name: "Styles", component: Styles },
    { path: "/documentation/buttons", name: "Buttons", component: Buttons },
    { path: "/documentation/cards", name: "Cards", component: Cards },
    { path: "/documentation/checkbox-radio", name: "CheckboxRadio", component: CheckboxRadio },
    { path: "/documentation/dropdown", name: "Dropdown", component: Dropdown },
    { path: "/documentation/google-maps", name: "GoogleMaps", component: GoogleMaps },
    { path: "/documentation/icons", name: "Icons", component: Icons },
    { path: "/documentation/inputs", name: "Inputs", component: Inputs },
    { path: "/documentation/navigation", name: "Navigation", component: Navigation },
    { path: "/documentation/notifications", name: "Notifications", component: Notifications },
    { path: "/documentation/sidebar", name: "Sidebar", component: Sidebar },
    { path: "/documentation/tables", name: "Tables", component: Tables },
    { path: "/documentation/tasks", name: "Tasks", component: Tasks },
    { path: "/documentation/tooltips", name: "Tooltips", component: Tooltips },
    { path: "/documentation/typography", name: "Typography", component: Typography },
    { redirect: true, path: "/documentation", to: "/documentation/tutorial"}
];

export default docRoutes;
