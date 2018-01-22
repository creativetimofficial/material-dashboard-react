import App from 'containers/App/App.jsx';
import Documentation from 'containers/Documentation/Documentation.jsx';

const indexRoutes = [
    { path: "/documentation", component: Documentation },
    { path: "/", component: App },
];

export default indexRoutes;
