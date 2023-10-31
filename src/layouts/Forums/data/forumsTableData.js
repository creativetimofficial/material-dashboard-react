import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

export default function forumsTableData(forums) {
  const ForumInfo = ({ title, questions, user }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="button" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">User: {user}</MDTypography>
    </MDBox>
  );

  ForumInfo.propTypes = {
    title: PropTypes.string.isRequired,
    questions: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  };

  const QuestionInfo = ({ questions }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography variant="caption">Questions: {questions}</MDTypography>
    </MDBox>
  );

  QuestionInfo.propTypes = {
    questions: PropTypes.string.isRequired,
  };

  const formatRows = forums.map((forum) => ({
    forumInfo: (
      <ForumInfo
        title={forum.title}
        questions={forum.questions}
        user={forum.user}
      />
    ),
    questions: <QuestionInfo questions={forum.questions} />,
    action: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Edit
      </MDTypography>
    ),
  }));

  return {
    columns: [
      { Header: "forum", accessor: "forumInfo", width: "45%", align: "left" },
      { Header: "questions", accessor: "questions", width: "20%", align: "left" },
    ],
    rows: formatRows,
  };
}
