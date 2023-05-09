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
import MDTypography from "components/MDTypography";
import { TableCell } from "@mui/material";


function getTablesAPI(table) {
  switch (table) {
    case "bajadasSinPapel":
      return {
        title: "Bajadas sin Papel",
        table: {
          copias: ["valor1", "valor2", "valor3", "valor4"],
          "A3+": ["valor1", "valor2", "valor3", "valor4"],
          banner: ["valor1", "valor2", "valor3", "valor4"],
          diseños: ["valor1", "valor2", "valor3", "valor4"],
        },
      };
    case "bajadasAlGremio":
      return {
        title: "Bajadas al gremio",
        paperType: "A4",
        table: {
          "COPIAS": ["PAPEL", "1", "2 a 25", "26-50"],
          "350 grs MATE/BRILLANTE": ["4/0 | 4/4", "280 | 340", "230 | 280", "220 | 265"],
          "300 grs MATE/BRILLANTE": ["4/0 | 4/4", "260 | 320", "195 | 245", "190 | 240"],
          "200 grs ILUSTRA/OPALINA": ["4/0 | 4/4", "250 | 310", "182 | 232", "177 | 227"],
          "150 grs BRILLANTE": ["4/0 | 4/4", "190 | 250", "132 | 182", "128 | 178"],
          "115 grs BRILLANTE": ["4/0 | 4/4", "185 | 225", "127 | 177", "123 | 173"],
          "OBRA 90 grs": ["4/0 | 4/4", "140 | 200", "105 | 155", "100 | 150"],
          "Autoad Con/Sin split": ["4/0", "200", "150", "140"],
          "OPP Blanco/Transp": ["4/0", "350", "285", "280"],
        },
      };
    case "bajadasAlGremioA3":
      return {
        title: "Bajadas al gremio A3+",
        table: {
          copias: ["valor1", "valor2", "valor3", "valor4"],
          "A3+": ["valor1", "valor2", "valor3", "valor4"],
          banner: ["valor1", "valor2", "valor3", "valor4"],
          diseños: ["valor1", "valor2", "valor3", "valor4"],
        },
      };
    case "troquelado":
      return {
        title: "Troquelados",
        table: {
          copias: ["valor1", "valor2", "valor3", "valor4"],
          "A3+": ["valor1", "valor2", "valor3", "valor4"],
          banner: ["valor1", "valor2", "valor3", "valor4"],
          diseños: ["valor1", "valor2", "valor3", "valor4"],
        },
      };
    default:
      return [
        {
          paperSize: "A4",
          quantity: [
            {
              min: 1,
              max: 1,
              gramajes: [
                { gramaje: "150", fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
                { gramaje: "200", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "250", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "300", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "350", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
              ]
            },
            {
              min: 2, max: 25, gramajes: [
                { gramaje: "150", fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
                { gramaje: "200", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "250", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "300", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "350", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
              ]
            },
            {
              min: 26, max: 50, gramajes: [
                { gramaje: "150", fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
                { gramaje: "200", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "250", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "300", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "350", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
              ]
            }
          ]
        },
        {
          paperSize: "A3",
          quantity: [
            {
              min: 1, max: 1, gramajes: [
                { gramaje: "150", fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
                { gramaje: "200", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "250", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "300", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "350", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
              ]
            },
            {
              min: 2, max: 25, gramajes: [
                { gramaje: "150", fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
                { gramaje: "200", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "250", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "300", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "350", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
              ]
            },
            {
              min: 26, max: 50, gramajes: [
                { gramaje: "150", fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
                { gramaje: "200", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "250", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "300", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
                { gramaje: "350", fazes: [{ doble: true, price: 30 }, { doble: false, price: 45 }] },
              ]
            }
          ]
        },
      ];
  }
}

export default function data(editable = false, tableName = "bajadasSinPapel") {
  // TODO: Invoke API and fill collumns
  const response = getTablesAPI(tableName);
  const title = (editable) ? <EditableTableCell value={response.title} color="white" /> : <MDTypography variant="h6" color="white">{response.title}</MDTypography>;
  const headers = Object.keys(response.table);
  const columns = [];
  headers.forEach((header) => {
    columns.push({
      Header: (editable) ? <EditableTableCell value={header} /> : <TableCell>{header}</TableCell>,
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
      row[key] = (editable) ? <EditableTableCell value={response.table[key][i]} /> : <TableCell>{response.table[key][i]}</TableCell>;
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
