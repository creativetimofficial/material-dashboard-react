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
      paperSize: "Sin Papel",
      gramajes: [
        {
          gramaje: "A3",
          quantities: [
            { min: 101, max: 250, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 251, max: 500, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 501, max: 1000, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
          ]
        },
      ],
    },
    {
      paperSize: "A4",
      gramajes: [
        {
          gramaje: "150",
          quantities: [
            { min: 1, max: 1, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 2, max: 25, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 25, max: 50, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
          ]
        },
        {
          gramaje: "200",
          quantities: [
            { min: 1, max: 1, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 2, max: 25, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 25, max: 50, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
          ]
        },
        {
          gramaje: "250",
          quantities: [
            { min: 1, max: 1, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 2, max: 25, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 25, max: 50, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
          ]
        },
        {
          gramaje: "300",
          quantities: [
            { min: 1, max: 1, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 2, max: 25, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 25, max: 50, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
          ]
        },
        {
          gramaje: "350",
          quantities: [
            { min: 1, max: 1, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 2, max: 25, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 25, max: 50, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
          ]
        },
      ],
    },
    {
      paperSize: "A3",
      gramajes: [
        {
          gramaje: "150",
          quantities: [
            { min: 1, max: 1, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 2, max: 25, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 25, max: 50, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
          ]
        },
        {
          gramaje: "200",
          quantities: [
            { min: 1, max: 1, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 2, max: 25, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 25, max: 50, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
          ]
        },
        {
          gramaje: "250",
          quantities: [
            { min: 1, max: 1, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 2, max: 25, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 25, max: 50, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
          ]
        },
        {
          gramaje: "300",
          quantities: [
            { min: 1, max: 1, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 2, max: 25, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 25, max: 50, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
          ]
        },
        {
          gramaje: "350",
          quantities: [
            { min: 1, max: 1, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 2, max: 25, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
            { min: 25, max: 50, fazes: [{ doble: true, price: 20 }, { doble: false, price: 15 }] },
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
