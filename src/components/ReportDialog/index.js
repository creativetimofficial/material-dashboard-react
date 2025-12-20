import React, { useState } from "react";
// @mui material components
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

function ReportDialog({ open, onClose }) {
  const [format, setFormat] = useState("pdf");

  const handleDownload = async () => {
    // API Call logic goes here
    console.log(`Triggering API for ${format} report...`);
    // Example: await API.post("myReportAPI", "/generate", { body: { format } });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Generate System Report</DialogTitle>
      <DialogContent>
        <MDBox mt={2}>
          <MDTypography variant="body2" color="text" mb={2}>
            Select the format and date range for your Climate Wall analytics report.
          </MDTypography>
          <FormControl fullWidth>
            <InputLabel id="report-format-label">Format</InputLabel>
            <Select
              labelId="report-format-label"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              sx={{ height: "45px", mt: 1 }}
            >
              <MenuItem value="pdf">PDF Document (.pdf)</MenuItem>
              <MenuItem value="csv">Data Spreadsheet (.csv)</MenuItem>
            </Select>
          </FormControl>
        </MDBox>
      </DialogContent>
      <DialogActions>
        <MDButton onClick={onClose} color="secondary">Cancel</MDButton>
        <MDButton onClick={handleDownload} color="info" variant="gradient">
          Download
        </MDButton>
      </DialogActions>
    </Dialog>
  );
}

export default ReportDialog;