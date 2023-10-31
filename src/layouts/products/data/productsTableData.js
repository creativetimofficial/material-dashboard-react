import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import PropTypes from 'prop-types';

export default function productsTableData(products) {
  const ProductInfo = ({ name, category, description, user }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
      <MDTypography variant="caption">{category}</MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
      <MDTypography variant="caption">{user}</MDTypography>
    </MDBox>
  );
  ProductInfo.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  };

  const randomStatus = () => {
    const statuses = ["Available", "Pending", "Sold"];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  const formatRows = products.map(product => ({
    productInfo: <ProductInfo
      name={product.name}
      category={product.category}
      description={product.description}
      user={product.user}
    />,
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
      { Header: "product", accessor: "productInfo", width: "45%", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],
    rows: formatRows,
  };
}