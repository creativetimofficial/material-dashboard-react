import * as React from "react"
import Box from "@mui/material/Box"
import MDButton from "components/MDButton"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import Icon from "@mui/material/Icon"
import MDInput from "components/MDInput"

export default function AddModal({ saveBtn }) {
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
  const [textUzb, setTextUzb] = React.useState('')
  const [textUzbK, setTextUzbK] = React.useState('')
  const [textRus, setTextRus] = React.useState('')
  const [textEng, setTextEng] = React.useState('')
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setTextUzb('')
    setTextUzbK('')
    setTextRus('')
    setTextEng('')
  }
  const handleAdd = () => {
    saveBtn({
      addUzb: textUzb,
      addUzbK: textUzbK,
      addRus: textRus,
      addEng: textEng
    })
    setOpen(false)
    setTextUzb('')
    setTextUzbK('')
    setTextRus('')
    setTextEng('')
  }
  return (
    <div>
      <MDButton onClick={handleOpen} variant="gradient" color="dark">
        <Icon sx={{ fontWeight: "bold" }}>add</Icon>
      </MDButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Kategorya qushish
          </Typography>
          <MDInput label="Uzbek" value={textUzb} onChange={(e) => setTextUzb(e.target.value)} />
          <MDInput label="Kiril" value={textUzbK} onChange={(e) => setTextUzbK(e.target.value)} />
          <MDInput label="English" value={textEng} onChange={(e) => setTextEng(e.target.value)} />
          <MDInput label="Russio" value={textRus} onChange={(e) => setTextRus(e.target.value)} />
          <MDButton onClick={handleAdd} variant="gradient" color="dark">
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