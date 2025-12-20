import { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// AWS Amplify Imports
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Themes
import theme from "assets/theme";
import themeDark from "assets/theme-dark";

// Routes
import routes from "routes";

// Context
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images (Update brandName to "Climate Wall")
import brandWhite from "assets/images/logo-ct.png"; 
import brandDark from "assets/images/logo-ct-dark.png";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Navigation handlers
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  useEffect(() => {
    document.body.setAttribute("dir", direction);
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [direction, pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) return getRoutes(route.collapse);
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <ThemeProvider theme={darkMode ? themeDark : theme}>
          <CssBaseline />
          {layout === "dashboard" && (
            <>
              <Sidenav
                color={sidenavColor}
                brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
                brandName="Climate Wall" // UPDATED: Brand Name
                routes={routes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              />
              <Configurator />
              {/* Settings / Config Button */}
              <MDBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="3.25rem"
                height="3.25rem"
                bgColor="white"
                shadow="sm"
                borderRadius="50%"
                position="fixed"
                right="2rem"
                bottom="2rem"
                zIndex={99}
                color="dark"
                sx={{ cursor: "pointer" }}
                onClick={handleConfiguratorOpen}
              >
                <Icon fontSize="small" color="inherit">settings</Icon>
              </MDBox>
            </>
          )}
          
          <Routes>
            {getRoutes(routes)}
            {/* The Navigate to /dashboard acts as your default protected view */}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </ThemeProvider>
      )}
    </Authenticator>
  );
}