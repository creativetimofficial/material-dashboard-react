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
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
//core components
import checkboxAdnRadioStyle from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.jsx";
const checkbox = `import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
//core components
import checkboxAdnRadioStyle from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.jsx";

class ExampleCheckboxUsage extends React.Component{
    state = {
        checked: [],
    };
    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };
    render(){
        const { classes } = this.props;
        return (
            <Checkbox
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                classes={{
                    checked: classes.checked,
                }}
            />
        );
    }
};

ExampleCheckboxUsage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(checkboxAdnRadioStyle)(ExampleCheckboxUsage);`;

const radio = `import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Radio from "@material-ui/core/Radio";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
//core components
import checkboxAdnRadioStyle from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.jsx";

class ExampleRadioUsage extends React.component{
    state = {
        selectedValue: null,
    };
    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };
    render(){
        const { classes } = this.props;
        return (
            <div>
                <Radio
                    checked={this.state.selectedValue === 'a'}
                    onChange={this.handleChange}
                    value="a"
                    name="radio button demo"
                    aria-label="A"
                    icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                    checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                    classes={{
                        checked: classes.radio,
                    }}
                />
                <Radio
                    checked={this.state.selectedValue === 'b'}
                    onChange={this.handleChange}
                    value="b"
                    name="radio button demo"
                    aria-label="B"
                    icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                    checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                    classes={{
                        checked: classes.radio
                    }}
                />
            </div>
        );
    }
}

ExampleRadioUsage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(checkboxAdnRadioStyle)(ExampleRadioUsage);`;

class CheckboxRadio extends React.Component {
  state = {
    checked: [],
    selectedValue: null
  };
  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };
  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Checkbox and Radio</h1>
        <p>
          We've restyled the default checkboxes and radios from the material-ui
          theme.
        </p>
        <h2>Checkbox</h2>
        <Checkbox
          tabIndex={-1}
          onClick={this.handleToggle(1)}
          checkedIcon={<Check className={classes.checkedIcon} />}
          icon={<Check className={classes.uncheckedIcon} />}
          classes={{
            checked: classes.checked
          }}
        />
        <SyntaxHighlighter language="jsx" style={prism}>
          {checkbox}
        </SyntaxHighlighter>
        <h2>Radio</h2>
        <Radio
          checked={this.state.selectedValue === "a"}
          onChange={this.handleChange}
          value="a"
          name="radio button demo"
          aria-label="A"
          icon={<FiberManualRecord className={classes.radioUnchecked} />}
          checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
          classes={{
            checked: classes.radio
          }}
        />
        <Radio
          checked={this.state.selectedValue === "b"}
          onChange={this.handleChange}
          value="b"
          name="radio button demo"
          aria-label="B"
          icon={<FiberManualRecord className={classes.radioUnchecked} />}
          checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
          classes={{
            checked: classes.radio
          }}
        />
        <SyntaxHighlighter language="jsx" style={prism}>
          {radio}
        </SyntaxHighlighter>
        <h2>Properties</h2>
        Please refer to{" "}
        <a
          href="https://material-ui-next.com/api/checkbox/?ref=creativetim"
          target="_blank"
        >
          material-ui checkbox documentation
        </a>{" "}
        and{" "}
        <a
          href="https://material-ui-next.com/api/radio/?ref=creativetim"
          target="_blank"
        >
          material-ui radio documentation
        </a>
        .
      </div>
    );
  }
}

export default withStyles(checkboxAdnRadioStyle)(CheckboxRadio);
