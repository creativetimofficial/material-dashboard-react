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
