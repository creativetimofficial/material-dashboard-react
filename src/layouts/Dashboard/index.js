import React from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Navbar from 'components/Navbars/Navbar';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import styles from 'assets/jss/material-dashboard-react/layouts/adminStyle';
import bgImage from 'assets/img/sidebar-4.jpg';
import logo from 'assets/img/reactlogo.png';
import { APP_DISPLAY_NAME } from 'constants/app';
import PropTypes from 'prop-types';
import useActiveRouteName from 'hooks/useActiveRouteName';
import sidebarRoutes from './sidebar_links';

let ps;

const useStyles = makeStyles(styles);

export default function DashboardLayout({ children, ...rest }) {
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pageTitle = useActiveRouteName();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = 'hidden';
    }

    const resizeFunction = () => {
      if (window.innerWidth >= 960) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', resizeFunction);
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
      window.removeEventListener('resize', resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={sidebarRoutes}
        logoText={APP_DISPLAY_NAME}
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color="blue"
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          title={pageTitle}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        <div className={classes.content}>
          <div className={classes.container}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
