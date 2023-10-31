import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

export default function messagesTableData(messages) {
  const MessageInfo = ({ messageType, messageID, content, sentBy }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="button" fontWeight="medium">
        Type: {messageType}
      </MDTypography>
      <MDTypography variant="caption">Message ID: {messageID}</MDTypography>
      <MDTypography variant="caption">Content: {content}</MDTypography>
      <MDTypography variant="caption">Sent By: {sentBy}</MDTypography>
    </MDBox>
  );

  MessageInfo.propTypes = {
    messageType: PropTypes.string.isRequired,
    messageID: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    sentBy: PropTypes.string.isRequired,
  };

  const SentByInfo = ({ sentBy }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography variant="caption">Sent By: {sentBy}</MDTypography>
    </MDBox>
  );

  SentByInfo.propTypes = {
    sentBy: PropTypes.string.isRequired,
  };

  const formatRows = messages.map((message) => ({
    messageInfo: (
      <MessageInfo
        messageType={message.messageType}
        messageID={message.messageID}
        content={message.content}
        sentBy={message.sentBy}
      />
    ),
    sentBy: <SentByInfo sentBy={message.sentBy} />,
    action: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Edit
      </MDTypography>
    ),
  }));

  return {
    columns: [
      { Header: "Message", accessor: "messageInfo", width: "45%", align: "left" },
      { Header: "Content", accessor: "sentBy", width: "20%", align: "left" },
      { Header: "Action", accessor: "action", align: "center" },
    ],
    rows: formatRows,
  };
}
