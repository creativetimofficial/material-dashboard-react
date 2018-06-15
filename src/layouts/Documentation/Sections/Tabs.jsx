import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// @material-ui/icons
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Tabs from "components/CustomTabs/CustomTabs.jsx";
import Tasks from "components/Tasks/Tasks.jsx";

import { bugs, website, server } from "variables/general.jsx";

const codeExample = `import React from "react";
// @material-ui/icons
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Tabs from "components/CustomTabs/CustomTabs.jsx";
import Tasks from "components/Tasks/Tasks.jsx";

import { bugs, website, server } from "variables/general.jsx";

function DemoTabs({ ...props }) {
  return (
    <Tabs
      title="Tasks:"
      headerColor="rose"
      tabs={[
        {
          tabName: "Bugs",
          tabIcon: BugReport,
          tabContent: (
            <Tasks
              checkedIndexes={[0, 3]}
              tasksIndexes={[0, 1, 2, 3]}
              tasks={bugs}
            />
          )
        },
        {
          tabName: "Website",
          tabIcon: Code,
          tabContent: (
            <Tasks
              checkedIndexes={[0]}
              tasksIndexes={[0, 1]}
              tasks={website}
            />
          )
        },
        {
          tabName: "Server",
          tabIcon: Cloud,
          tabContent: (
            <Tasks
              checkedIndexes={[1]}
              tasksIndexes={[0, 1, 2]}
              tasks={server}
            />
          )
        }
      ]}
    />
  );
}

export default DemoTabs;
`;
const codeProps = `CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.func,
      tabContent: PropTypes.node.isRequired
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool
};`;

function DemoTasks({ ...props }) {
  //  const { } = props;
  return (
    <div>
      <h1>CustomTabs</h1>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/jss/material-dashboard-react/components/customTabsStyle.jsx
        </code>.
      </p>
      <h2>Example</h2>
      <Tabs
        title="Tasks:"
        headerColor="rose"
        tabs={[
          {
            tabName: "Bugs",
            tabIcon: BugReport,
            tabContent: (
              <Tasks
                checkedIndexes={[0, 3]}
                tasksIndexes={[0, 1, 2, 3]}
                tasks={bugs}
              />
            )
          },
          {
            tabName: "Website",
            tabIcon: Code,
            tabContent: (
              <Tasks
                checkedIndexes={[0]}
                tasksIndexes={[0, 1]}
                tasks={website}
              />
            )
          },
          {
            tabName: "Server",
            tabIcon: Cloud,
            tabContent: (
              <Tasks
                checkedIndexes={[1]}
                tasksIndexes={[0, 1, 2]}
                tasks={server}
              />
            )
          }
        ]}
      />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}

export default DemoTasks;
