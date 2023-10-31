import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import PropTypes from "prop-types";

export default function usertable(users) {
  const ProductInfo = ({ name }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
    </MDBox>
  );
  ProductInfo.propTypes = {
    name: PropTypes.string.isRequired,
  };

  const formatRows = users.map((product) => {
    const columns = [
      { Header: "Full Name", accessor: "productInfo", width: "45%", align: "left" },
      { Header: "username", accessor: "username", align: "center" },
      { Header: "Email", accessor: "email", align: "center" },
      { Header: "Location", accessor: "location", align: "center" },
    ];

    // Check if "status" is defined in the user object
    if (product.status !== undefined) {
      columns.push({ Header: "status", accessor: "status", align: "center" });
    }

   
    return {
      ...product,
      productInfo: <ProductInfo name={product.name} />,
      username: <ProductInfo name={product.username} />,
      email: <ProductInfo name={product.email} />,
      location: <ProductInfo name={product.location} />,
      columns: columns,
    };
  });

  return {
    columns: formatRows[0].columns, // Assuming all rows have the same columns
    rows: formatRows,
  };
}
