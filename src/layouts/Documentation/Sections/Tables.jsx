import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

// @material-ui/core components
// @material-ui/icons
//core components
import Table from "components/Table/Table.jsx";

const tableDep = `import Table from "components/Table/Table.jsx";`;
const table = `<Table
    tableHeaderColor="primary"
    tableHead={['Name','Country','City','Salary']}
    tableData={[
        [ "Dakota Rice" , "Niger" , "Oud-Turnhout" , "$36,738" ] ,
        [ "Minerva Hooper" , "Curaçao" , "Sinaai-Waas" , "$23,789" ] ,
        [ "Sage Rodriguez" , "Netherlands" , "Baileux" , "$56,142" ] ,
        [ "Philip Chaney" , "Korea, South" , "Overland Park" , "$38,735" ] ,
        [ "Doris Greene" , "Malawi" , "Feldkirchen in Kärnten" , "$63,542" ] ,
        [ "Mason Porter" , "Chile" , "Gloucester" , "$78,615" ]
    ]}
/>`;
const tableProp = `CustomTable.defaultProps = {
    tableHeaderColor: 'gray'
}

CustomTable.propTypes = {
    tableHeaderColor: PropTypes.oneOf(['warning','primary','danger','success','info','rose','gray']),
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};`;
class Tables extends React.Component {
  render() {
    return (
      <div>
        <h1>Tables</h1>
        <p>We've created a component so you can better render tables.</p>
        <Table
          tableHeaderColor="primary"
          tableHead={["Name", "Country", "City", "Salary"]}
          tableData={[
            ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
            ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
            ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
            ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
            ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
            ["Mason Porter", "Chile", "Gloucester", "$78,615"]
          ]}
        />
        <SyntaxHighlighter language="jsx" style={prism}>
          {tableDep}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {table}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {tableProp}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          Please check out the{" "}
          <a
            href="https://material-ui-next.com/demos/tables/"
            target="_blank"
            rel="noopener noreferrer"
          >
            official material-ui documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default Tables;
