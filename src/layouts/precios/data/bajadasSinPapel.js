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




function getTablesAPI() {

  return [
    {
      printSize: "A4",
      papel: [
        {
          gramaje: "150",
          caracteristicas: ["mate", "brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 25, max: 50, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
          ]
        },
        {
          gramaje: "200",
          caracteristicas: ["mate", "brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 25, max: 50, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
          ]
        },
        {
          gramaje: "250",
          caracteristicas: ["mate", "brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 25, max: 50, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
          ]
        },
        {
          gramaje: "300",
          caracteristicas: ["mate", "brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 25, max: 50, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
          ]
        },
        {
          gramaje: "350",
          caracteristicas: ["mate", "brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 25, max: 50, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
          ]
        },
      ],
    },
    {
      printSize: "A3",
      papel: [
        {
          gramaje: "150",
          caracteristicas: ["mate", "brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 25, max: 50, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
          ]
        },
        {
          gramaje: "200",
          caracteristicas: ["mate", "brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 25, max: 50, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
          ]
        },
        {
          gramaje: "250",
          caracteristicas: ["mate", "brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 25, max: 50, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
          ]
        },
        {
          gramaje: "300",
          caracteristicas: ["mate", "brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 25, max: 50, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
          ]
        },
        {
          gramaje: "350",
          caracteristicas: ["mate", "brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
            { min: 25, max: 50, options: [{ description: "4/4", value: "$20" }, { description: "4/0", value: "$15" }] },
          ]
        },
        {
          gramaje: null,
          caracteristicas: [],
          quantities: [
            { min: 1, max: 1, options: [{ description: "valor", value: "$15" }, { description: "diseños", value: "2" }] },
            { min: 2, max: 25, options: [{ description: "valor", value: "$15" }, { description: "diseños", value: "5" }] },
            { min: 25, max: 50, options: [{ description: "valor", value: "$15" }, { description: "diseños", value: "10" }] },
          ]
        },
      ],
    },
  ];

}

export default function data() {
  // TODO: Invoke API and fill collumns
  const category = getTablesAPI();
  return category;
}
