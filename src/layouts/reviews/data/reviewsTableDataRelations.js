import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import PropTypes from 'prop-types';

export default function reviewsTableDataRelations(reviews) {
    const ReviewInfo = ({ feedback, rating }) => (
        <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="button" fontWeight="medium">
                {feedback}
            </MDTypography>
            <MDTypography variant="caption">Rating: {rating}</MDTypography>
        </MDBox>
    );
    ReviewInfo.propTypes = {
        feedback: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
    };

    const UserInfo = ({ userName, userEmail }) => (
        <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" fontWeight="medium">
                {userName}
            </MDTypography>
            <MDTypography variant="caption">{userEmail}</MDTypography>
        </MDBox>
    );
    UserInfo.propTypes = {
        userName: PropTypes.string.isRequired,
        userEmail: PropTypes.string.isRequired,
    };

    const formatRows = reviews.map(review => ({
        reviewInfo: <ReviewInfo
            feedback={review.feedback}
            rating={review.rating}
        />,
        user: <UserInfo
            userName={review.userName}
            userEmail={review.userEmail}
        />,
        action: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                Edit
            </MDTypography>
        ),
    }));

    return {
        columns: [
            { Header: "Review", accessor: "reviewInfo", width: "40%", align: "left" },
            { Header: "User", accessor: "user", width: "30%", align: "left" },
            { Header: "Action", accessor: "action", align: "center" },
        ],
        rows: formatRows,
    };
}
