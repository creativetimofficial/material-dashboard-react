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

export default function data() {
  return {
    columns: [
      { Header: "copias", accessor: "copias", width: "30%", align: "left" },
      { Header: "A3+", accessor: "A3+", align: "center" },
      { Header: "banner", accessor: "banner", align: "center" },
      { Header: "diseños", accessor: "diseños", align: "center" },
    ],

    rows: [
      {
        copias: <EditableTableCell value="$2,500" />,
        "A3+": <EditableTableCell value="$2,500" />,
        banner: <EditableTableCell value="$2,500" />,
        diseños: <EditableTableCell value="$2,500" />,
      },
      {
        copias: <EditableTableCell value="$2,500" />,
        "A3+": <EditableTableCell value="$2,500" />,
        banner: <EditableTableCell value="$2,500" />,
        diseños: <EditableTableCell value="$2,500" />,
      },
      {
        copias: <EditableTableCell value="$2,500" />,
        "A3+": <EditableTableCell value="$2,500" />,
        banner: <EditableTableCell value="$2,500" />,
        diseños: <EditableTableCell value="$2,500" />,
      },
      {
        copias: <EditableTableCell value="$2,500" />,
        "A3+": <EditableTableCell value="$2,500" />,
        banner: <EditableTableCell value="$2,500" />,
        diseños: <EditableTableCell value="$2,500" />,
      },
    ],
  };
}
