import Box from "@mui/material/Box"
import Icon from "@mui/material/Icon"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import MDButton from "components/MDButton"
import MDInput from "components/MDInput"
import Tooltip from "@mui/material/Tooltip"
import * as React from "react"

export default function EditModal({ nameUzb, nameUzbK, nameRus, nameEng, saveAllName }) {
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
  const [textUz, setTextUzb] = React.useState(nameUzb)
  const [textUzK, setTextUzbK] = React.useState(nameUzbK)
  const [textRu, setTextRus] = React.useState(nameRus)
  const [textEn, setTextEng] = React.useState(nameEng)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleSave = () => {
    saveAllName({ textUz, textUzK, textRu, textEn })
    setOpen(false)
  }

  return (
    <div>
      <MDButton onClick={handleOpen}>
        <Tooltip title="Edit Categories" placement="top">
          <Icon sx={{ cursor: "pointer" }} fontSize="small">
            edit:
          </Icon>
        </Tooltip>
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
            value={textUz}
            onChange={(e) => setTextUzb(e.target.value)}
          />
          <MDInput
            plesholder="Kiril"
            value={textUzK}
            onChange={(e) => setTextUzbK(e.target.value)}
          />
          <MDInput
            plesholder="English"
            value={textEn}
            onChange={(e) => setTextEng(e.target.value)}
          />
          <MDInput
            plesholder="Russia"
            value={textRu}
            onChange={(e) => setTextRus(e.target.value)}
          />
          <MDButton onClick={() => handleSave()} variant="gradient" color="dark">
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
