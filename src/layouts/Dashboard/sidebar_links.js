import DashboardIcon from '@material-ui/icons/Dashboard';
import TableIcon from '@material-ui/icons/Toc';

const sidebarRoutes = [
  {
    name: 'Overview',
    to: '/dashboard/overview',
    icon: DashboardIcon,
  },
  {
    name: 'Table List',
    to: '/dashboard/table-list',
    icon: TableIcon,
  },
];

export default sidebarRoutes;
