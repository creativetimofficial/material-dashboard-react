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
