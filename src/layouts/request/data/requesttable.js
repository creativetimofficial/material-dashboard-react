import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import PropTypes from "prop-types";

export default function usertable(requests) {
  const RequestInfo = ({ requestID, status }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="button" fontWeight="medium">
        {requestID}
      </MDTypography>
    </MDBox>
  );

  RequestInfo.propTypes = {
    requestID: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  };

  const formatRows = requests.map((request) => {
    const columns = [
      { Header: "Request ID", accessor: "requestInfo", width: "45%", align: "left" },
    ];

    // Check if "status" is defined in the request object
    if (request.status !== undefined) {
      columns.push({ Header: "Status", accessor: "status", align: "center" });
    }
    
    if(request.name!==undefined){
        columns.push({ Header: "Name", accessor: "name", align: "center" });
    }

    return {
      ...request,
      requestInfo: <RequestInfo requestID={request.requestID} status={request.status} />,
      columns: columns,
    };
  });

  return {
    columns: formatRows[0].columns, // Assuming all rows have the same columns
    rows: formatRows,
  };
}
