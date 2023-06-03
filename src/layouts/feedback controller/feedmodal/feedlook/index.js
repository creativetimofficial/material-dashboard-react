import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import MDBox from "components/MDBox"
import MDInput from "components/MDInput"
import * as React from "react"
import { FormControl, IconButton } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"

export default function FeedlookModal({ name, email, phoneNumber, title }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "space-between",
    borderRadius: "10px",
  }

  const [checked, setChecked] = React.useState(false)
  const handleClose = () => setChecked(false)

  const handleClickShowPassword = () => {
    setChecked((prev) => !prev)
  }

  const handleMouseDownPassword = () => {}

  return (
    <div>
      <MDBox sx={{ height: 35 }}>
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {setChecked ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </MDBox>
      <Modal
        open={checked}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography mb={2} id="modal-modal-title" variant="h6" component="h2">
            Xabarni kuring
          </Typography>
          <MDBox mb={1} display="flex" justifyContent="space-between">
            <MDBox mb={2} width="25%">
              <MDInput type="name" label="full name" value={name} fullWidth />
            </MDBox>
            <MDBox mb={2} width="25%">
              <MDInput type="phone number" label="PhoneNumber" value={phoneNumber} fullWidth />
            </MDBox>
            <MDBox mb={2} width="25%">
              <MDInput type="email" label="Email Address" value={email} fullWidth />
            </MDBox>
          </MDBox>
          <FormControl>
            <Typography mb={2} id="modal-modal-title" variant="h6" component="h2">
              Fikir:
            </Typography>
            <Typography mb={2} id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
          </FormControl>
        </Box>
      </Modal>
    </div>
  )
}
