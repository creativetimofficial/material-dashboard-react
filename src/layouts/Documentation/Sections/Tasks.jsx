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
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

// @material-ui/core components
// @material-ui/icons
//core components
import TT from "components/Tasks/Tasks.jsx";
import { bugs } from "variables/general";

const tasksDep = `import Tasks from 'components/Tasks/Tasks.jsx';
import { bugs } from 'variables/general';`;
const tasks = `<Tasks
    checkedIndexes={[0,3]}
    tasksIndexes={[0,1,2,3]}
    tasks={bugs}
/>`;
const tasksProp = `Tasks.propTypes = {
    // used to determine which checkboxes are checked
    tasksIndexes: PropTypes.arrayOf(PropTypes.number),
    tasks: PropTypes.arrayOf(PropTypes.node)
};`;

class Tasks extends React.Component {
  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <p>
          This components is used in the <code>TasksCard</code> (see{" "}
          <Link to={"/documentation/cards"}>cards section</Link>).
        </p>
        <TT checkedIndexes={[0, 3]} tasksIndexes={[0, 1, 2, 3]} tasks={bugs} />
        <SyntaxHighlighter language="jsx" style={prism}>
          {tasksDep}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {tasks}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {tasksProp}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Tasks;
