import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Documentation from 'layouts/Documentation/Documentation.jsx';

const indexRoutes = [
    { path: "/documentation", component: Documentation },
    { path: "/", component: Dashboard },
];

export default indexRoutes;
