import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import PropTypes from "prop-types";

export default function inventoryTableData(inventories) {
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

  const randomStatus = () => {
    const statuses = ["Available", "Pending", "Sold"];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  const formatRows = inventories.map((inventory) => ({
    InventoryInfo: <InventoryInfo inventoryID={inventory.inventoryID} />,
    status: (
      <MDBox ml={-1}>
        <MDBadge badgeContent={randomStatus()} color="success" variant="gradient" size="sm" />
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
      { Header: "Inventory Info", accessor: "InventoryInfo", width: "45%", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],
    rows: formatRows,
  };
}
