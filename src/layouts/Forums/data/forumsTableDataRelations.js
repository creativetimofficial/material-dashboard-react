import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import PropTypes from "prop-types";

export default function forumsTableDataRelations(forums) {
  const ForumInfo = ({ title, questions }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="button" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{questions}</MDTypography>
    </MDBox>
  );
  ForumInfo.propTypes = {
    title: PropTypes.string.isRequired,
    questions: PropTypes.string.isRequired,
  };

  const OwnerInfo = ({ userName, userEmail }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" fontWeight="medium">
        {userName}
      </MDTypography>
      <MDTypography variant="caption">{userEmail}</MDTypography>
    </MDBox>
  );
  OwnerInfo.propTypes = {
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
  };

  const formatRows = forums.map((forum) => ({
    forumInfo: <ForumInfo title={forum.title} questions={forum.questions} />,
    owner: <OwnerInfo userName={forum.userName} userEmail={forum.userEmail} />,
    action: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Edit
      </MDTypography>
    ),
  }));

  return {
    columns: [
      { Header: "Forum", accessor: "forumInfo", width: "30%", align: "left" },
      { Header: "Owner", accessor: "owner", width: "30%", align: "left" },
    ],
    rows: formatRows,
  };
}
