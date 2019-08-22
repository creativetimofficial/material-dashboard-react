import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
//core components
import styles from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.js";

const checkbox = `import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
//core components
import styles from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.js";

const useStyles = makeStyles(styles);

export default function CheckboxRadio() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div>
      <Checkbox
        tabIndex={-1}
        onClick={() => handleToggle(1)}
        checkedIcon={<Check className={classes.checkedIcon} />}
        icon={<Check className={classes.uncheckedIcon} />}
        classes={{
          checked: classes.checked
        }}
      />
    </div>
  );
}`;

const radio = `import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
//core components
import styles from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.js";

const useStyles = makeStyles(styles);

export default function CheckboxRadio() {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState(null);
  return (
    <div>
      <Radio
        checked={selectedValue === "a"}
        onChange={() => setSelectedValue("a")}
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
        checked={selectedValue === "b"}
        onChange={() => setSelectedValue("b")}
        value="b"
        name="radio button demo"
        aria-label="B"
        icon={<FiberManualRecord className={classes.radioUnchecked} />}
        checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
        classes={{
          checked: classes.radio
        }}
      />
    </div>
  );
}
`;

const useStyles = makeStyles(styles);

export default function CheckboxRadio() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
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
        onClick={() => handleToggle(1)}
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
        checked={selectedValue === "a"}
        onChange={() => setSelectedValue("a")}
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
        checked={selectedValue === "b"}
        onChange={() => setSelectedValue("b")}
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
