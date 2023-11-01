import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import PropTypes from "prop-types";

function ContractInfo({  terms }) {
  return (
    <MDBox lineHeight={1} textAlign="left">

      <MDTypography variant="caption">Terms: {terms}</MDTypography>
    </MDBox>
  );
}

function ContractType({ type }) {
  return (
      <MDTypography display="block" variant="button" fontWeight="medium">
        Type: {type}
      </MDTypography>

  );
}

ContractInfo.propTypes = {
  terms: PropTypes.string.isRequired,
};
ContractType.propTypes = {
  type: PropTypes.string.isRequired,
};

function formatRows(contracts) {
  const formatRow = (contract) => ({
    ContractInfo: (
      <ContractInfo  terms={contract.terms}  />
    ),

    ContractType: (
      <ContractType type={contract.type} />
    ),

    action: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
      </MDTypography>
  ),
    // Add more attributes as needed
  });

  const formatRows = contracts.map(formatRow);

  return {
    columns: [
      { Header: "Contract Info", accessor: "ContractInfo", width: "30%", align: "left" },
      { Header: "Contract Type", accessor: "ContractType", width: "30%", align: "left" },

      // Add more columns for other attributes

      { Header: "action", accessor: "action", align: "center" },
    ],
    rows: formatRows,
  };
}

export default formatRows;
