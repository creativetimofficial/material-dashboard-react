# Change Log

## [1.9.0] 2020-05-27
### Bug fixing
- https://github.com/creativetimofficial/material-dashboard-react/issues/121
- https://github.com/creativetimofficial/material-dashboard-react/issues/98
- https://github.com/creativetimofficial/material-dashboard-react/pull/99
- https://github.com/creativetimofficial/material-dashboard-react/pull/65
### Major style changes
### Deleted components
### Added components
### Deleted dependencies
### Added dependencies
### Updated dependencies
```
@material-ui/core         4.3.2   →    4.10.0
@material-ui/icons        4.2.1   →     4.9.1
history                   4.9.0   →    4.10.1
perfect-scrollbar         1.4.0   →     1.5.0
react                    16.9.0   →   16.13.1
react-chartist           0.13.3   →    0.14.3
react-dom                16.9.0   →   16.13.1
react-router-dom          5.0.1   →     5.2.0
react-scripts             3.1.0   →     3.4.1
react-swipeable-views    0.13.3   →    0.13.9
eslint-config-prettier    6.0.0   →    6.11.0
eslint-plugin-prettier    3.1.0   →     3.1.3
prettier                 1.18.2   →     2.0.5
@types/googlemaps        3.37.3   →    3.39.6
ajv                      6.10.2   →    6.12.2
typescript                3.5.3   →     3.9.3
```
### Warning
_While in development some of the plugins that were used for this product will throw some warnings - note, this only happens in development, the UI or the functionality of the product is not affected, also, if the issues will persist in React 17, we'll drop usage of those plugins, and replace them with other ones._
_Warnings might appear while doing an npm install - they do not affect the UI or the functionality of the product, and they appear because of NodeJS and not from the product itself._

## [1.8.0] 2019-08-26
### Bug fixing
- Rewrote the ISSUE_TEMPLATE
- Deleted the copyright comments from all files, we only need to keep them inside our index.js and index.html
- Added script that adds copyrights to the built app
- Renamed all the files from `.jsx` to `.js`
- Changed the `withStyles` function from Material-UI with the `makeStyles` function (integration with other frameworks should now be easy)
- React Hooks is now supported
### Major style changes
- Renamed `assets/jss/material-dashboard-react/layouts/dashboardStyle.js` to `assets/jss/material-dashboard-react/layouts/adminStyle.js`
### Deleted components
### Added components
### Deleted dependencies
### Added dependencies
+ gulp@4.0.2
+ gulp-append-prepend@1.0.8
### Updated dependencies
```
@material-ui/core         4.1.0   →    4.3.2
@material-ui/icons        4.1.0   →    4.2.1
react                    16.8.6   →   16.9.0
react-dom                16.8.6   →   16.9.0
react-scripts             3.0.1   →    3.1.0
eslint-config-prettier    4.3.0   →    6.0.0
@types/googlemaps        3.36.4   →   3.37.3
ajv                      6.10.0   →   6.10.2
typescript                3.5.1   →    3.5.3
```

## [1.7.0] 2019-06-19
### Warning
**All React Material products have now the same version, i.e. 1.7.0.**
- **All linting errors are solved now, but due to google analytics stuff, we've needed to add target="_blank" to our links, so this lint error still exists.**
### Bug fixing
- Bugs from updated dependencies
- Removed `.env` file, and replaced it with the `jsconfig.json` file
- Changes caused by running [the prettier command](https://prettier.io/docs/en/install.html) for *.jsx*, *.js*, *.html* and *.css* files
- Changed all string refs to `React.createRef()`
- Added types validation in each component
- Solved linting issues
- Solved https://github.com/creativetimofficial/material-dashboard-react/issues/83
### Major style changes
### Deleted components
### Added components
### Deleted dependencies
### Added dependencies
- typescript@3.5.1 (To stop console warnings on install)
### Updated dependencies
```
@material-ui/core          3.9.2   →    4.1.0
@material-ui/icons         3.0.2   →    4.1.0
chartist                  0.10.1   →   0.11.2
history                    4.7.2   →    4.9.0
prettier                  1.16.4   →   1.18.2
prop-types                15.7.1   →   15.7.2
react                     16.8.1   →   16.8.6
react-dom                 16.8.1   →   16.8.6
react-router-dom           4.3.1   →    5.0.1
react-scripts              2.1.5   →    3.0.1
react-swipeable-views     0.13.1   →   0.13.3
eslint-config-prettier     4.0.0   →    4.3.0
eslint-plugin-prettier     3.0.1   →    3.1.0
@types/googlemaps        3.30.16   →   3.36.4
ajv                        6.9.1   →   6.10.0
```

## [1.6.0] 2019-02-13
### Nice stuff
- [Added RTL support](https://github.com/creativetimofficial/material-dashboard-react/issues/16)
### Bug Fixing
- [Added new script for npm](https://github.com/creativetimofficial/material-dashboard-react/issues/69)
- Changed our buggy routing system, now it should work flawlessly, for more info, please refer to our [live docs here](https://demos.creative-tim.com/material-dashboard-react/#/documentation/routing-system)
- [https://github.com/creativetimofficial/material-dashboard-react/issues/67](https://github.com/creativetimofficial/material-dashboard-react/issues/67)
- [https://github.com/creativetimofficial/material-dashboard-react/issues/68](https://github.com/creativetimofficial/material-dashboard-react/issues/68)
- [https://github.com/creativetimofficial/material-dashboard-react/issues/66](https://github.com/creativetimofficial/material-dashboard-react/issues/66)
### Major style changes
- Almost all styles have been changed due to new components, solved issues or [the prettier command](https://prettier.io/docs/en/install.html)
### Major components changes
- Changes caused by running [the prettier command](https://prettier.io/docs/en/install.html) for *.jsx*, *.js*, *.html* and *.css* files
- **src/index.js**
- **src/components/CustomTabs/CustomTabs.jsx**
- **src/components/Header/Header.jsx**
- **src/components/Sidebar/Sidebar.jsx**
- **src/components/Snackbar/Snackbar.jsx**
- **src/components/Snackbar/SnackbarContent.jsx**
- **src/components/Tasks/Tasks.jsx**
- **src/views/Notifications/Notifications.jsx**
### New components
- **src/components/FixedPlugin/FixedPlugin.jsx**(Left menu used by us for customization - due to this, we've had to add a link for the fonts awesome cdn)
- **src/components/Header/RTLHeaderLinks.jsx**
- **src/layouts/Admin.jsx** (instead of Dashboard)
- **src/layouts/RTL.jsx**
- **src/views/RTLPage/RTLPage.jsx**
### Deleted components
- **src/layouts/Dashboard/Dashboard.jsx** (renamed to Admin)
- **src/routes/dashboard.jsx**
- **src/routes/index.jsx**
### Deleted dependencies
- `babel-plugin-module-resolver` (because of the upgrade of `react-scripts`)
- `babel-eslint` (because of the upgrade of `react-scripts`)
- `eslint` (because of the upgrade of `react-scripts`)
- `eslint-plugin-react` (because of the upgrade of `react-scripts`)
- `npm-run-all`
### Added dependencies
- `history4.7.2`
- `prop-types@15.6.2`
- `prettier@1.16.4`
### Updated dependencies
- `@material-ui/core`                *3.1.0*   →     **3.9.2**
- `@material-ui/icons`               *3.0.1*   →     **3.0.2**
- `@types/googlemaps`              *3.30.13*   →   **3.30.16**
- `ajv`                             *^5.0.0*   →     **6.9.1**
- `prop-types`                      *15.6.2*   →    **15.7.1**
- `react`                           *16.5.2*   →    **16.8.1**
- `react-chartist`                  *0.13.1*   →    **0.13.3**
- `react-dom`                       *16.5.2*   →    **16.8.1**
- `react-scripts`                    *1.1.5*   →     **2.1.5**
- `react-swipeable-views`          *0.12.17*   →    **0.13.1**
- `eslint-config-prettier`           *3.0.1*   →     **4.0.0**
- `eslint-plugin-prettier`           *2.6.2*   →     **3.0.1**

## [1.5.0] 2018-09-21
### Nice stuff
- Added `install:clean` command (deletes `node_modules` and `package-lock.json` and runs `npm install`)
### Major style changes
- `src/assets/jss/material-dashboard-react/components/tasksStyle.jsx`
- `src/assets/jss/material-dashboard-react/checkboxAdnRadioStyle.jsx`
- `src/assets/jss/material-dashboard-react/components/customTabsStyle.jsx`
- `src/assets/jss/material-dashboard-react/components/snackbarContentStyle.jsx`
### Deleted dependencies
- `@babel/runtime v7.0.0-beta.55`
### Added dependencies
### Updated dependencies
- `@material-ui/core`          *1.4.3*   →     **3.1.0**
- `@material-ui/icons`         *2.0.1*   →     **3.0.1**
- `@types/googlemaps`        *3.30.11*   →   **3.30.13**
- `ajv`                        *6.5.2*   →     **5.0.0** (to stop some warnings)
- `react`                     *16.4.1*   →    **16.5.2**
- `react-dom`                 *16.4.1*   →    **16.5.2**
- `react-scripts`              *1.1.4*   →     **1.1.5**
- `react-swipeable-views`    *0.12.15*   →   **0.12.17**
- `eslint-config-prettier`    *^2.9.0*   →    **3.0.1**
- `eslint-plugin-react`      *^7.10.0*   →   **7.11.1**
- `prettier`                 *^1.13.7*   →   **1.14.3**

## [1.4.1] 2018-08-10
### Bug Fixing
- Github solved issues:
  - `https://github.com/creativetimofficial/material-dashboard-react/issues/58`
- Changed the `GridContainer` component
### Major style changes
- `src/assets/jss/material-dashboard-react/components/footerStyle.jsx`
- `src/assets/jss/material-dashboard-react/components/headerStyle.jsx`
### Added dependencies
- `@babel/runtime v7.0.0-beta.55`
### Update dependencies
- `@material-ui/core v1.4.1` to `@material-ui/core v1.4.3`
- `@material-ui/icons v2.0.0` to `@material-ui/icons v2.0.1`


## [1.4.0] 2018-07-26
### Bug Fixing
- Added resize event listener for window ([see this issue here](https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/40#issuecomment-406983150))
- Added issues template file
- Github solved issues:
  - https://github.com/creativetimofficial/material-dashboard-react/issues/49 (dropped `react-popper` in favour of `@material-ui/core/Popper`)
  - https://github.com/creativetimofficial/material-dashboard-react/issues/47
  - https://github.com/creativetimofficial/material-dashboard-react/issues/45
  - https://github.com/creativetimofficial/material-dashboard-react/issues/38
  - https://github.com/creativetimofficial/material-dashboard-react/issues/37
- Github enhancement issues:
  - https://github.com/creativetimofficial/material-dashboard-react/issues/47 (read the [./README.md](./README.md) file)
### Major style changes
- Added styles for `svg`'s, **font-awesome** classes and `.material-icons` class inside
  - `src/assets/jss/material-dashboard-react/views/dashboardStyle.jsx`
  - `src/assets/jss/material-dashboard-react/components/buttonStyle.jsx`
  - `src/assets/jss/material-dashboard-react/components/cardFooterStyle.jsx`
  - `src/assets/jss/material-dashboard-react/components/cardHeaderStyle.jsx`
  - `src/assets/jss/material-dashboard-react/components/headerLinksStyle.jsx`
  - `src/assets/jss/material-dashboard-react/components/customTabsStyle.jsx`
- Others
  - `src/assets/jss/material-dashboard-react/tooltipStyle.jsx`
  - `src/assets/jss/material-dashboard-react/dropdownStyle.jsx`
### Dropped components
- Dropped popper usage in favour of `@material-ui/core/Popper` (Changes in `src/components/Header/HeaderLinks.jsx`)
### Added components
- `src/components/Grid/GridContainer.jsx` (instead of MUI's `<Grid container...` component)
### Deleted dependencies
### Added dependencies
### Update dependencies
- `@material-ui/core v1.2.1` to `@material-ui/core v1.4.1`
- `@material-ui/icons v1.1.0` to `@material-ui/icons v2.0.0`
- `@types/googlemaps v3.30.9` to `@types/googlemaps v3.30.11`
- `ajv v6.5.1` to `ajv v6.5.2`
- `react v16.4.0` to `react v16.4.1`
- `react-dom v16.4.0` to `react-dom v16.4.1`
- `react-swipeable-views v0.12.13` to `react-swipeable-views v0.12.15`


## [1.3.0] 2018-06-15
### Bug Fixing
- Changed import from `material-ui` to `@material-ui/core`
- Droped `src/components/index.js`, and changed all the imports to separate ones
- Renamed `ItemGrid` to `GridItem`
### Major style changes
- Moved the styles of `src/components/` inside `src/assets/jss/material-dashboard-react/components/`
- Moved the styles of `src/layouts/` inside `src/assets/jss/material-dashboard-react/layouts/`
- Moved the styles of `src/views/` inside `src/assets/jss/material-dashboard-react/views/`
- Almost all styles have been changed more or less
### Dropped components
- `src/components/CustomButtons/IconButton.jsx` (instead use `src/components/CustomButtons/Button.jsx` with `justIcon` prop)
- Some components from `src/components/Typography` (instead of these we've added some css to style the normal HTML tags)
  - `src/components/Typography/A.jsx`
  - `src/components/Typography/P.jsx`
  - `src/components/Typography/Small.jsx`
- All the cards from `src/components/Cards`
  - `src/components/Cards/ChartCard.jsx`
  - `src/components/Cards/ProfileCard.jsx`
  - `src/components/Cards/RegularCard.jsx`
  - `src/components/Cards/StatsCard.jsx`
  - `src/components/Cards/TasksCard.jsx`
### Added components
- New card components (`src/components/Card/*`) instead of `src/components/Cards/*`
  - `src/components/Card/Card.jsx`
  - `src/components/Card/CardAvatar.jsx`
  - `src/components/Card/CardBody.jsx`
  - `src/components/Card/CardFooter.jsx`
  - `src/components/Card/CardHeader.jsx`
  - `src/components/Card/CardIcon.jsx`
- `src/components/CustomTabs/CustomTabs.jsx` (instead of `src/components/Cards/TasksCard.jsx`)
### Deleted dependencies
- `material-ui@1.0.0-beta.41`
### Added dependencies
- `@material-ui/core@1.2.1` (instead of `material-ui@1.0.0-beta.41`)
- `@types/googlemaps@3.30.9` to stop the warning: **npm WARN react-google-maps@9.4.5 requires a peer of @types/googlemaps@^3.0.0 but none is installed. You must install peer dependencies yourself.**
- `@types/markerclustererplus@2.1.33` to stop the warning: **npm WARN react-google-maps@9.4.5 requires a peer of @types/markerclustererplus@^2.1.29 but none is installed. You must install peer dependencies yourself.**
- `ajv@6.5.1` to stop the warning: **npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.**
### Update dependencies
- `@material-ui/icons@1.0.0-beta.42` to `@material-ui/icons@1.1.0`
- `classnames@2.2.5` to `classnames@2.2.6`
- `npm-run-all@4.1.2` to `npm-run-all@4.1.3`
- `perfect-scrollbar@1.3.0` to `perfect-scrollbar@1.4.0`
- `react@16.2.0` to `react@16.4.0`
- `react-dom@16.2.0` to `react-dom@16.4.0`
- `react-router-dom@4.2.2` to `react-router-dom@4.3.1`
- `react-scripts@1.0.17` to `react-scripts@1.1.4`
- `react-swipeable-views@0.12.12` to `react-swipeable-views@0.12.13`

## [1.2.0] 2018-04-16
### Bug Fixing
- Renamed `src/containers/App/App.jsx` to `src/layouts/Dashboard/Dashboard.jsx`
- Renamed `src/variables/styles.jsx` to `src/assets/jss/material-dashboard-react.jsx`
- Moved all the files from `src/variables/styles/` to `src/assets/jss/material-dashboard-react/`
- Changes caused by the upgrade of `material-ui`
- Small bug fixing
### Deleted dependencies
- `material-ui-icons@1.0.0-beta.17`
### Update dependencies
- `material-ui@1.0.0-beta.34` to `material-ui@1.0.0-beta.41`
### Added dependencies
- `@material-ui/icons@1.0.0-beta.42`

## [1.1.0] 2018-02-23
### Bug Fixing
- PerfectScrollbar renders only on windows
- Used [pretier](https://github.com/prettier/prettier) to make the code more readable
- Optimized images sizes
- Changed `classes={root:...}` to `classNames={...}` only where it had `classes={root:...}` and not like `classes={root:..., something:... ,...}`
- Added `classnames()` to avoid doing brittle class name manipulation
- Classes that do not need states were converted to functions
- Moved the style variables in `src/variables/styles.jsx` and all the components styles in `src/variables/styles/{$componentNameStyle}.jsx` files
- Added `-webkit-overflow-scrolling: touch` css for nice scrolling on mobile devices
- Updated to latest `Material-UI` version (from `v1.0.0.beta30` to `v1.0.0.beta34`)

## [1.0.0] 2018-01-29
### Original Release
- Added Material-UI as base framework
- Added design from Material Dashboard by Creative Tim
