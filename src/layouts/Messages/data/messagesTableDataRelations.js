import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import PropTypes from "prop-types";

export default function messagesTableDataRelations(messages) {
  const MessageInfo = ({ messageType, content, sentBy }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="button" fontWeight="medium">
        {messageType}
      </MDTypography>
      <MDTypography variant="caption">{content}</MDTypography>
      <MDTypography variant="caption">{sentBy}</MDTypography>
    </MDBox>
  );
  MessageInfo.propTypes = {
    messageType: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    sentBy: PropTypes.string.isRequired,
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

  const messageRows = messages.map((message) => ({
    messageInfo: (
      <MessageInfo
        messageType={message.messageType}
        content={message.content}
        sentBy={message.sentBy}
      />
    ),
    owner: <OwnerInfo userName={message.userName} userEmail={message.userEmail} />,
    action: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Edit
      </MDTypography>
    ),
  }));

  return {
    columns: [
      { Header: "Message", accessor: "messageInfo", width: "30%", align: "left" },
      { Header: "Owner", accessor: "owner", width: "30%", align: "left" },
      { Header: "Action", accessor: "action", align: "center" },
    ],
    rows: messageRows,
  };
}
