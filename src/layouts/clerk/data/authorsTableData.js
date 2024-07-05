// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function data() {
  const imageSrc = "path_to_image"; // replace with the actual image source

  return {
    columns: [
      { Header: "name", accessor: "name", width: "20%", align: "left" },
      { Header: "price", accessor: "price", width: "15%", align: "right" },
      { Header: "stock_quantity", accessor: "stock_quantity", width: "15%", align: "center" },
      { Header: "buying_price", accessor: "buying_price", width: "15%", align: "right" },
      { Header: "selling_price", accessor: "selling_price", width: "15%", align: "right" },
      { Header: "store_id", accessor: "store_id", width: "10%", align: "center" },
      { Header: "image", accessor: "image", width: "10%", align: "center" },
    ],
    rows: [
      {
        name: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            Product Name
          </MDTypography>
        ),
        price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $99.99
          </MDTypography>
        ),
        stock_quantity: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            100
          </MDTypography>
        ),
        buying_price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $50.00
          </MDTypography>
        ),
        selling_price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $99.99
          </MDTypography>
        ),
        store_id: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            Store_123
          </MDTypography>
        ),
        image: <MDBox component="img" src={imageSrc} alt="product image" width="50px" />,
      },
      {
        name: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            Product Name
          </MDTypography>
        ),
        price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $99.99
          </MDTypography>
        ),
        stock_quantity: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            100
          </MDTypography>
        ),
        buying_price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $50.00
          </MDTypography>
        ),
        selling_price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $99.99
          </MDTypography>
        ),
        store_id: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            Store_123
          </MDTypography>
        ),
        image: <MDBox component="img" src={imageSrc} alt="product image" width="50px" />,
      },
      {
        name: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            Product Name
          </MDTypography>
        ),
        price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $99.99
          </MDTypography>
        ),
        stock_quantity: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            100
          </MDTypography>
        ),
        buying_price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $50.00
          </MDTypography>
        ),
        selling_price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $99.99
          </MDTypography>
        ),
        store_id: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            Store_123
          </MDTypography>
        ),
        image: <MDBox component="img" src={imageSrc} alt="product image" width="50px" />,
      },
      {
        name: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            Product Name
          </MDTypography>
        ),
        price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $99.99
          </MDTypography>
        ),
        stock_quantity: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            100
          </MDTypography>
        ),
        buying_price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $50.00
          </MDTypography>
        ),
        selling_price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $99.99
          </MDTypography>
        ),
        store_id: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            Store_123
          </MDTypography>
        ),
        image: <MDBox component="img" src={imageSrc} alt="product image" width="50px" />,
      },
      {
        name: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            Product Name
          </MDTypography>
        ),
        price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $99.99
          </MDTypography>
        ),
        stock_quantity: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            100
          </MDTypography>
        ),
        buying_price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $50.00
          </MDTypography>
        ),
        selling_price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $99.99
          </MDTypography>
        ),
        store_id: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            Store_123
          </MDTypography>
        ),
        image: <MDBox component="img" src={imageSrc} alt="product image" width="50px" />,
      },
      {
        name: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            Product Name
          </MDTypography>
        ),
        price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $99.99
          </MDTypography>
        ),
        stock_quantity: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            100
          </MDTypography>
        ),
        buying_price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $50.00
          </MDTypography>
        ),
        selling_price: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            $99.99
          </MDTypography>
        ),
        store_id: (
          <MDTypography component="a" href="#" variant="body1" color="text" fontWeight="medium">
            Store_123
          </MDTypography>
        ),
        image: <MDBox component="img" src={imageSrc} alt="product image" width="50px" />,
      },
    ],
  };
}
