import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import PropTypes from 'prop-types';

export default function ReviewsTableData(reviews) {
  const ReviewInfo = ({ feedback, rating, user }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="button" fontWeight="medium">
        {feedback}
      </MDTypography>

      <MDTypography variant="caption">User: {user}</MDTypography>
    </MDBox>
  );
  const RatingInfo = ({ rating }) => (
    <MDBox lineHeight={1} textAlign="left">

      <MDTypography variant="caption">Rating: {rating}</MDTypography>
    </MDBox>
  );

  RatingInfo.propTypes = {

    rating: PropTypes.string.isRequired,

  };
  ReviewInfo.propTypes = {
    feedback: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  };

  const formatRows = reviews.map(review => ({
    reviewInfo: <ReviewInfo
      feedback={review.feedback}
      rating={review.rating}
      user={review.user}
    />,
    rating: <RatingInfo

      rating={review.rating}

    />,
    status: (
      <MDBox ml={-1}>
        <MDBadge badgeContent={review.status} color="success" variant="gradient" size="sm" />
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
      { Header: "Review", accessor: "reviewInfo", width: "45%", align: "left" },
      { Header: "Rating", accessor: "rating", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],
    rows: formatRows,
  };
}
