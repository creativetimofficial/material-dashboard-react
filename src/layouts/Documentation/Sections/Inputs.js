/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
//core components
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";

const inputsDep = `// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
//core components
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";`;
const inputs = `<Grid container>
  <GridItem xs={12} sm={12} md={4}>
    <CustomInput
      labelText="Disabled"
      id="disabled"
      formControlProps={{
        fullWidth: true
      }}
      inputProps={{
        disabled: true
      }}
    />
  </GridItem>
  <GridItem xs={12} sm={12} md={4}>
    <CustomInput
      id="regular"
      inputProps={{
        placeholder: "Regular"
      }}
      formControlProps={{
        fullWidth: true
      }}
    />
  </GridItem>
  <GridItem xs={12} sm={12} md={4}>
    <CustomInput
      labelText="With floating label"
      id="float"
      formControlProps={{
        fullWidth: true
      }}
    />
  </GridItem>
  <GridItem xs={12} sm={12} md={4}>
    <CustomInput
      labelText="Success input"
      id="success"
      success
      formControlProps={{
        fullWidth: true
      }}
    />
  </GridItem>
  <GridItem xs={12} sm={12} md={4}>
    <CustomInput
      labelText="Error input"
      id="error"
      error
      formControlProps={{
        fullWidth: true
      }}
    />
  </GridItem>
  <GridItem xs={12} sm={12} md={4}>
    <CustomInput
      labelText="With material Icons"
      id="material"
      formControlProps={{
        fullWidth: true
      }}
      inputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <People />
          </InputAdornment>
        )
      }}
    />
  </GridItem>
</Grid>`;
const inputsProp = `CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
};`;

class Inputs extends React.Component {
  render() {
    return (
      <div>
        <h1>Inputs</h1>
        <Grid container>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Disabled"
              id="disabled"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                disabled: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              id="regular"
              inputProps={{
                placeholder: "Regular"
              }}
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="With floating label"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Success input"
              id="success"
              success
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Error input"
              id="error"
              error
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="With material Icons"
              id="material"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <People />
                  </InputAdornment>
                )
              }}
            />
          </GridItem>
        </Grid>
        <SyntaxHighlighter language="jsx" style={prism}>
          {inputsDep}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {inputs}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {inputsProp}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          To see what props you can pass inside the <code>inputProps</code>,{" "}
          <code>labelProps</code>, <code>formControlProps</code> please check
          out the{" "}
          <a
            href="https://material-ui-next.com/api/input/?ref=creativetim"
            target="_blank"
          >
            material-ui input documentation
          </a>
          ,{" "}
          <a
            href="https://material-ui-next.com/api/input-label/?ref=creativetim"
            target="_blank"
          >
            material-ui label documentation
          </a>{" "}
          and{" "}
          <a
            href="https://material-ui-next.com/api/form-control/?ref=creativetim"
            target="_blank"
          >
            material-ui form controll documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Inputs;
