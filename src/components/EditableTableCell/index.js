import React, { useState } from "react";
import { TableCell, IconButton, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";
import MDTypography from "components/MDTypography";

function EditableTableCell({ value, color, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setTempValue(value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onSave(tempValue);
  };

  const handleInputChange = (event) => {
    setTempValue(event.target.value);
  };

  return (
    <TableCell>
      {isEditing ? (
        <>
          <TextField
            autoFocus
            value={tempValue}
            onChange={handleInputChange}
            inputProps={{
              style: { padding: 0 },
            }}
          />
          <IconButton size="small" onClick={handleSaveClick}>
            <SaveIcon />
          </IconButton>
          <IconButton size="small" onClick={handleCancelClick}>
            <CancelIcon />
          </IconButton>
        </>
      ) : (
        <>
          <MDTypography component="a" href="#" variant="button" color={color} fontWeight="medium">
            {tempValue}
          </MDTypography>
          <IconButton size="small" onClick={handleEditClick}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </TableCell>
  );
}

EditableTableCell.defaultProps = {
  value: "",
  onSave: () => { },
  color: "text",
};

EditableTableCell.propTypes = {
  value: PropTypes.string,
  onSave: PropTypes.func,
  color: PropTypes.string,
};

export default EditableTableCell;
