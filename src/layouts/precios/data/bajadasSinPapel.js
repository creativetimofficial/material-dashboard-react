/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Material Dashboard 2 React components

import EditableTableCell from "components/EditableTableCell";

function getTablesAPI() {
  return {
    title: "Bajadas sin Papel",
    table: {
      copias: ["valor1", "valor2", "valor3", "valor4"],
      "A3+": ["valor1", "valor2", "valor3", "valor4"],
      banner: ["valor1", "valor2", "valor3", "valor4"],
      diseños: ["valor1", "valor2", "valor3", "valor4"],
    },
  };
}

export default function data() {
  // TODO: Invoke API and fill collumns
  const response = getTablesAPI();
  const title = <EditableTableCell value={response.title} color="white" />;
  const headers = Object.keys(response.table);
  const columns = [];
  headers.forEach((header) => {
    columns.push({
      Header: <EditableTableCell value={header} />,
      accessor: header,
      width: "auto",
      align: "left",
    });
  });
  const numRows = response.table[headers[0]].length; // assumes all arrays have the same length
  const rows = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numRows; i++) {
    const row = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key of headers) {
      row[key] = <EditableTableCell value={response.table[key][i]} />;
    }
    rows.push(row);
  }

  const table = {
    title,
    columns,
    rows,
  };
  return table;
}
