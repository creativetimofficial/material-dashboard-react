import Box from "@mui/material/Box"
import Icon from "@mui/material/Icon"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import MDButton from "components/MDButton"
import MDInput from "components/MDInput"
import * as React from "react"

export default function EditModal({ props }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    height: "390px",
    justifyContent: "space-between",
  }
  const [open, setOpen] = React.useState(false)
  const [textUzb, setTextUzb] = React.useState(props.textUz)
  const [textUzbK, setTextUzbK] = React.useState(props.textUzK)
  const [textRus, setTextRus] = React.useState(props.textRu)
  const [textEng, setTextEng] = React.useState(props.textEn)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <MDButton onClick={handleOpen}>
        <Icon sx={{ cursor: "pointer" }} fontSize="small">
          edit:
        </Icon>
      </MDButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Kategorya uzgartirish
          </Typography>
          <MDInput
            plesholder="Uzbek"
            value={textUzb}
            onChange={(e) => setTextUzb(e.target.value)}
          />
          <MDInput
            plesholder="Kiril"
            value={textUzbK}
            onChange={(e) => setTextUzbK(e.target.value)}
          />
          <MDInput
            plesholder="English"
            value={textEng}
            onChange={(e) => setTextEng(e.target.value)}
          />
          <MDInput
            plesholder="Russia"
            value={textRus}
            onChange={(e) => setTextRus(e.target.value)}
          />
          <MDButton onClick={handleClose} variant="gradient" color="dark">
            Save
          </MDButton>
          <MDButton onClick={handleClose} variant="gradient" color="dark">
            Close
          </MDButton>
        </Box>
      </Modal>
    </div>
  )
}
