# Change Log

## [3.0.0] 2021-11-23

### Bug fixing

### Major style changes

- Migration from JSS to MUI `styled` api, emotion and `sx` prop.
- The `box-shadow`, `border-radius` and `typography` `regular` size renamed to `md` for theme
- The `backgroundColor` prop renamed to `bgColor` for components
- The `boxShadow` prop renamed to `shadow` for components
- SuiBox `backgroundGradient` prop replaced with `variant: ["contained", "gradient"]`
- SuiButton `buttonColor` prop renamed to `color`
- SuiSocialButton `buttonColor` prop renamed to `color`
- SuiBadge `size` prop updated to ["xs", "sm", "md", "lg"]
- SuiBadgeDot `size` prop updated to ["xs", "sm", "md", "lg"]
- SuiBadgeDot `gradient` prop replaced with `variant: ["contained", "gradient"]`
- SuiInput `withIcon` prop renamed to `icon`
- SuiProgress `gradient` prop replaced with `variant: ["contained", "gradient"]`
- SuiTypography `textColor` prop renamed to `color`
- SuiSnackbar `type` prop renamed to `color`
- New prop `bgWhite` added for SuiSnackbar
- WheatherCard renamed to WeatherCard
- WheatherCard `wheather` prop renamed to `weather`
- PageRoutes renamed to page.routes.js
- Sidenav is more dynamic now, color, brand, brandName props are added

### Deleted components

### Added components

- src/examples/Cards/BlogCards/SimpleBlogCard
- src/examples/Cards/BlogCards/WavedBlogCard
- src/examples/Cards/TeamCards/DefaultTeamCard
- src/examples/Cards/TeamCards/ComplexTeamCard
- src/examples/Cards/PricingCards/OutlinedPricingCard
- src/examples/Cards/PricingCards/WavedPricingCard
- src/examples/Cards/ProfileCards/SimpleProfileCard
- src/examples/Cards/ProfileCards/DefaultProfileCard
- src/examples/Cards/ProfileCards/ComplexProfileCard
- src/examples/Cards/BackgroundCards/DefaultBackgroundCard
- src/examples/Cards/BackgroundCards/SimpleBackgroundCard

### Deleted dependencies

```
- jss
- jss-rtl
- @mui/styles
```

### Added dependencies

```
@three-ts/orbit-controls
```

### Updated dependencies

```
@mui/icons-material                5.0.0-rc.1       →     5.1.1
@mui/material                      5.0.0-rc.1       →     5.1.1
@mui/styled-engine                 5.0.0-rc.1       →     5.1.1
react-quill                        2.0.0-beta.2     →     1.3.5
```

### Warning

## [2.0.0] 2021-09-20

### Bug fixing

### Major style changes

- Migration from Material-UI v4 to Material-UI v5.
- Customizing Autocomplete component based on the Soft Design.
- Customizing the TextField component based on the Soft Design.

### Deleted components

### Added components

### Deleted dependencies

```
- @material-ui/core
- @material-ui/icons
- @material-ui/styles
```

### Added dependencies

```
- @emotion/cache
- @emotion/react
- @emotion/react
- @emotion/styled
- @mui/icons-material
- @mui/material
- @mui/styled-engine
- @mui/styles
- stylis
- stylis-plugin-rtl
```

### Updated dependencies

### Warning

The soft-ui-dashboard-pro-react/pages/rtl is chaning the route slowly in development mode its a problem with @emotion/cache `prepend` and we will fix it on our future updates.

## [1.0.0] 2021-09-02

### Original Release
