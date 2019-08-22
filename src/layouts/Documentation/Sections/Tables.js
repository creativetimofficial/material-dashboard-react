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
// @material-ui/icons
//core components
import Table from "components/Table/Table.js";

const tableDep = `import Table from "components/Table/Table.js";`;
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
            href="https://material-ui-next.com/demos/tables/?ref=creativetim"
            target="_blank"
          >
            official material-ui documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Tables;
