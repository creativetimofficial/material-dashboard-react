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
      printSize: "A4+",
      papel: [
        {
          gramaje: "150 grs",
          caracteristicas: ["brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$175" }, { description: "4/0", value: "$133" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$112,8" }, { description: "4/0", value: "$81,8" }] },
            { min: 26, max: 50, options: [{ description: "4/4", value: "$110,4" }, { description: "4/0", value: "$79,4" }] },
            { min: 51, max: 100, options: [{ description: "4/4", value: "$104,2" }, { description: "4/0", value: "$76,3" }] },
            { min: 101, max: 300, options: [{ description: "4/4", value: "$98" }, { description: "4/0", value: "$70,1" }] },
            { min: 301, max: 500, options: [{ description: "4/4", value: "$91,8" }, { description: "4/0", value: "$67,0" }] },
            { min: 501, max: 1000, options: [{ description: "4/4", value: "$88,7" }, { description: "4/0", value: "$63,9" }] },
          ]
        },
        {
          gramaje: "300 grs",
          caracteristicas: ["mate", "brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$224" }, { description: "4/0", value: "$182" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$151,9" }, { description: "4/0", value: "$120,9" }] },
            { min: 26, max: 50, options: [{ description: "4/4", value: "$148,8" }, { description: "4/0", value: "$117,8" }] },
            { min: 51, max: 100, options: [{ description: "4/4", value: "$139,5" }, { description: "4/0", value: "$111,6" }] },
            { min: 101, max: 300, options: [{ description: "4/4", value: "$133,3" }, { description: "4/0", value: "$105,4" }] },
            { min: 301, max: 500, options: [{ description: "4/4", value: "$124,0" }, { description: "4/0", value: "$99,2" }] },
            { min: 501, max: 1000, options: [{ description: "4/4", value: "$115,3" }, { description: "4/0", value: "$90,5" }] },
          ]
        },
        {
          gramaje: "Obra",
          caracteristicas: [],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$140" }, { description: "4/0", value: "$98" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$96,1" }, { description: "4/0", value: "$65,1" }] },
            { min: 26, max: 50, options: [{ description: "4/4", value: "$93" }, { description: "4/0", value: "$62" }] },
            { min: 51, max: 100, options: [{ description: "4/4", value: "$86,8" }, { description: "4/0", value: "$55,8" }] },
            { min: 101, max: 300, options: [{ description: "4/4", value: "$77,5" }, { description: "4/0", value: "$52,7" }] },
            { min: 301, max: 500, options: [{ description: "4/4", value: "$74,4" }, { description: "4/0", value: "$49,6" }] },
            { min: 501, max: 1000, options: [{ description: "4/4", value: "$71,3" }, { description: "4/0", value: "$46,5" }] },
          ]
        },
        {
          gramaje: "Autoadhesivo",
          caracteristicas: ["con split", "sin split"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/0", value: "$140" }] },
            { min: 2, max: 25, options: [{ description: "4/0", value: "$93" }] },
            { min: 26, max: 50, options: [{ description: "4/0", value: "$86,8" }] },
            { min: 51, max: 100, options: [{ description: "4/0", value: "$83,7" }] },
            { min: 101, max: 300, options: [{ description: "4/0", value: "$77,5" }] },
            { min: 301, max: 500, options: [{ description: "4/0", value: "$74,4" }] },
            { min: 501, max: 1000, options: [{ description: "4/0", value: "$71,3" }] },
          ]
        },
      ],
    },
    {
      printSize: "A3+",
      papel: [
        {
          gramaje: "115 grs",
          caracteristicas: ["brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$225" }, { description: "4/0", value: "$185" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$177" }, { description: "4/0", value: "$127" }] },
            { min: 26, max: 50, options: [{ description: "4/4", value: "$173" }, { description: "4/0", value: "$123" }] },
            { min: 51, max: 100, options: [{ description: "4/4", value: "$163" }, { description: "4/0", value: "$118" }] },
            { min: 101, max: 300, options: [{ description: "4/4", value: "$153" }, { description: "4/0", value: "$108" }] },
            { min: 301, max: 500, options: [{ description: "4/4", value: "$143" }, { description: "4/0", value: "$103" }] },
            { min: 501, max: 1000, options: [{ description: "4/4", value: "$138" }, { description: "4/0", value: "$98" }] },
          ]
        },
        {
          gramaje: "150 grs",
          caracteristicas: ["brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$250" }, { description: "4/0", value: "$190" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$182" }, { description: "4/0", value: "$132" }] },
            { min: 26, max: 50, options: [{ description: "4/4", value: "$178" }, { description: "4/0", value: "$128" }] },
            { min: 51, max: 100, options: [{ description: "4/4", value: "$168" }, { description: "4/0", value: "$123" }] },
            { min: 101, max: 300, options: [{ description: "4/4", value: "$158" }, { description: "4/0", value: "$113" }] },
            { min: 301, max: 500, options: [{ description: "4/4", value: "$148" }, { description: "4/0", value: "$108" }] },
            { min: 501, max: 1000, options: [{ description: "4/4", value: "$143" }, { description: "4/0", value: "$103" }] },
          ]
        },
        {
          gramaje: "250 grs",
          caracteristicas: ["ilustracion", "opalina"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$310" }, { description: "4/0", value: "$250" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$232" }, { description: "4/0", value: "$182" }] },
            { min: 26, max: 50, options: [{ description: "4/4", value: "$227" }, { description: "4/0", value: "$177" }] },
            { min: 51, max: 100, options: [{ description: "4/4", value: "$212" }, { description: "4/0", value: "$167" }] },
            { min: 101, max: 300, options: [{ description: "4/4", value: "$202" }, { description: "4/0", value: "$157" }] },
            { min: 301, max: 500, options: [{ description: "4/4", value: "$187" }, { description: "4/0", value: "$147" }] },
            { min: 501, max: 1000, options: [{ description: "4/4", value: "$173" }, { description: "4/0", value: "$133" }] },
          ]
        },
        {
          gramaje: "300 grs",
          caracteristicas: ["mate", "brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$320" }, { description: "4/0", value: "$260" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$245" }, { description: "4/0", value: "$195" }] },
            { min: 26, max: 50, options: [{ description: "4/4", value: "$240" }, { description: "4/0", value: "$190" }] },
            { min: 51, max: 100, options: [{ description: "4/4", value: "$225" }, { description: "4/0", value: "$180" }] },
            { min: 101, max: 300, options: [{ description: "4/4", value: "$215" }, { description: "4/0", value: "$170" }] },
            { min: 301, max: 500, options: [{ description: "4/4", value: "$200" }, { description: "4/0", value: "$160" }] },
            { min: 501, max: 1000, options: [{ description: "4/4", value: "$186" }, { description: "4/0", value: "$146" }] },
          ]
        },
        {
          gramaje: "350 grs",
          caracteristicas: ["mate", "brillante"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$340" }, { description: "4/0", value: "$280" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$280" }, { description: "4/0", value: "$230" }] },
            { min: 26, max: 50, options: [{ description: "4/4", value: "$265" }, { description: "4/0", value: "$220" }] },
            { min: 51, max: 100, options: [{ description: "4/4", value: "$255" }, { description: "4/0", value: "$210" }] },
            { min: 101, max: 300, options: [{ description: "4/4", value: "$245" }, { description: "4/0", value: "$200" }] },
            { min: 301, max: 500, options: [{ description: "4/4", value: "$220" }, { description: "4/0", value: "$180" }] },
            { min: 501, max: 1000, options: [{ description: "4/4", value: "$205" }, { description: "4/0", value: "$170" }] },
          ]
        },
        {
          gramaje: "90 grs",
          caracteristicas: ["obra"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/4", value: "$200" }, { description: "4/0", value: "$140" }] },
            { min: 2, max: 25, options: [{ description: "4/4", value: "$155" }, { description: "4/0", value: "$105" }] },
            { min: 26, max: 50, options: [{ description: "4/4", value: "$150" }, { description: "4/0", value: "$100" }] },
            { min: 51, max: 100, options: [{ description: "4/4", value: "$140" }, { description: "4/0", value: "$90" }] },
            { min: 101, max: 300, options: [{ description: "4/4", value: "$125" }, { description: "4/0", value: "$85" }] },
            { min: 301, max: 500, options: [{ description: "4/4", value: "$120" }, { description: "4/0", value: "$80" }] },
            { min: 501, max: 1000, options: [{ description: "4/4", value: "$115" }, { description: "4/0", value: "$75" }] },
          ]
        },
        {
          gramaje: "Autoadhesivo",
          caracteristicas: ["con split", "sin split"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/0", value: "$200" }] },
            { min: 2, max: 25, options: [{ description: "4/0", value: "$150" }] },
            { min: 26, max: 50, options: [{ description: "4/0", value: "$140" }] },
            { min: 51, max: 100, options: [{ description: "4/0", value: "$135" }] },
            { min: 101, max: 300, options: [{ description: "4/0", value: "$125" }] },
            { min: 301, max: 500, options: [{ description: "4/0", value: "$120" }] },
            { min: 501, max: 1000, options: [{ description: "4/0", value: "$115" }] },
          ]
        },
        {
          gramaje: "Opalina",
          caracteristicas: ["blanco", "transparente"],
          quantities: [
            { min: 1, max: 1, options: [{ description: "4/0", value: "$350" }] },
            { min: 2, max: 25, options: [{ description: "4/0", value: "$285" }] },
            { min: 26, max: 50, options: [{ description: "4/0", value: "$280" }] },
            { min: 51, max: 100, options: [{ description: "4/0", value: "$275" }] },
            { min: 101, max: 300, options: [{ description: "4/0", value: "$265" }] },
            { min: 301, max: 500, options: [{ description: "4/0", value: "$260" }] },
            { min: 501, max: 1000, options: [{ description: "4/0", value: "$250" }] },
          ]
        },
        {
          gramaje: null,
          caracteristicas: [],
          quantities: [
            { min: 101, max: 250, options: [{ description: "valor", value: "$62" }, { description: "diseños", value: "2" }] },
            { min: 251, max: 500, options: [{ description: "valor", value: "$55" }, { description: "diseños", value: "3" }] },
            { min: 501, max: 1000, options: [{ description: "valor", value: "$52" }, { description: "diseños", value: "4" }] },
            { min: 1001, max: 2000, options: [{ description: "valor", value: "$47" }, { description: "diseños", value: "6" }] },
            { min: 2001, max: 3000, options: [{ description: "valor", value: "$45" }, { description: "diseños", value: "8" }] },
            { min: 3000, max: 9999, options: [{ description: "valor", value: "$40" }, { description: "diseños", value: "10" }] },
          ]
        },
      ],
    },
    {
      printSize: "TROQUELADOS",
      papel: [
        {
          gramaje: "Corte tipo 1",
          caracteristicas: ["2 a 4 bocas regulares"],
          quantities: [
            { min: 1, max: 10, options: [{ description: "valor", value: "$111" }] },
            { min: 11, max: 25, options: [{ description: "valor", value: "$106" }] },
            { min: 26, max: 50, options: [{ description: "valor", value: "$104" }] },
            { min: 51, max: 100, options: [{ description: "valor", value: "$90" }] },
            { min: 101, max: 999, options: [{ description: "valor", value: "$85" }] },
          ]
        },
        {
          gramaje: "Corte tipo 2",
          caracteristicas: ["5 a 40 bocas regulares"],
          quantities: [
            { min: 1, max: 10, options: [{ description: "valor", value: "$136" }] },
            { min: 11, max: 25, options: [{ description: "valor", value: "$121" }] },
            { min: 26, max: 50, options: [{ description: "valor", value: "$114" }] },
            { min: 51, max: 100, options: [{ description: "valor", value: "$112" }] },
            { min: 101, max: 999, options: [{ description: "valor", value: "$108" }] },
          ]
        },
        {
          gramaje: "Corte tipo 3",
          caracteristicas: ["41 a 60 bocas regulares"],
          quantities: [
            { min: 1, max: 10, options: [{ description: "valor", value: "$148" }] },
            { min: 11, max: 25, options: [{ description: "valor", value: "$133" }] },
            { min: 26, max: 50, options: [{ description: "valor", value: "$128" }] },
            { min: 51, max: 100, options: [{ description: "valor", value: "$125" }] },
            { min: 101, max: 999, options: [{ description: "valor", value: "$122" }] },
          ]
        },
        {
          gramaje: "Corte tipo 4",
          caracteristicas: ["61 a 100 bocas regulares"],
          quantities: [
            { min: 1, max: 10, options: [{ description: "valor", value: "$165" }] },
            { min: 11, max: 25, options: [{ description: "valor", value: "$150" }] },
            { min: 26, max: 50, options: [{ description: "valor", value: "$140" }] },
            { min: 51, max: 100, options: [{ description: "valor", value: "$135" }] },
            { min: 101, max: 999, options: [{ description: "valor", value: "$132" }] },
          ]
        },
      ],
    },
    {
      printSize: "BANNER",
      papel: [
        {
          gramaje: null,
          caracteristicas: [],
          quantities: [
            { min: 101, max: 250, options: [{ description: "valor", value: "$120" }, { description: "diseños", value: "2" }] },
            { min: 251, max: 500, options: [{ description: "valor", value: "$99" }, { description: "diseños", value: "3" }] },
            { min: 501, max: 1000, options: [{ description: "valor", value: "$90" }, { description: "diseños", value: "4" }] },
            { min: 1001, max: 2000, options: [{ description: "valor", value: "$83" }, { description: "diseños", value: "6" }] },
            { min: 2001, max: 3000, options: [{ description: "valor", value: "$81" }, { description: "diseños", value: "8" }] },
            { min: 3000, max: 9999, options: [{ description: "valor", value: "$79" }, { description: "diseños", value: "10" }] },
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
