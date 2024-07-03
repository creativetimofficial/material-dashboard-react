// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import React from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  const editorRef = React.useRef();
  const [value, setValue] = React.useState("");

  const defaultCode = `\ndef formulaMark(ass1):\n\treturn (ass1/40) * 100\n`;

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Add Course
                </MDTypography>
              </MDBox>
              <MDBox pt={3} px={3}>
                <Editor
                  height="60vh"
                  width="80%"
                  defaultLanguage="python"
                  theme="vs-dark"
                  defaultValue={defaultCode}
                  onMount={onMount}
                  value={value}
                  onChange={(value) => setValue(value)}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default CodeEditor;
