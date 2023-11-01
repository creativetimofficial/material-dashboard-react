import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import PropTypes from "prop-types";

export default function inventoryTableDataRelations(inventories) {
  const InventoryInfo = ({ inventoryID }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="button" fontWeight="medium">
        {inventoryID}
      </MDTypography>
    </MDBox>
  );

  InventoryInfo.propTypes = {
    inventoryID: PropTypes.string.isRequired,
  };

  const formatRows = inventories.map((inventory) => ({
    InventoryInfo: <InventoryInfo inventoryID={inventory.inventoryID} />,
    status: (
      <MDBox ml={-1}>
        <MDBadge color="success" variant="gradient" size="sm" />
      </MDBox>
    ),
    action: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Edit
      </MDTypography>
    ),
  }));

  return {
    columns: [
      { Header: "Inventory Info", accessor: "InventoryInfo", width: "30%", align: "left" },
      { Header: "Status", accessor: "status", width: "30%", align: "left" },
      { Header: "Action", accessor: "action", align: "center" },
    ],
    rows: formatRows,
  };
}
