import DeleteIcon from "@mui/icons-material/Delete"
import { Tooltip } from "@mui/material"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import MDButton from "components/MDButton"
import { useState } from "react"

export default function DeleteModal({ deleteBtn, itemData }) {
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
    height: "200px",
    justifyContent: "space-between",
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleDelete = (value) => {
    deleteBtn(value)
    setOpen(false)
  }
  return (
    <div>
      <MDButton onClick={handleOpen}>
        <Tooltip title="Delete" placement="top">
          <DeleteIcon color="error" />
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
            Kategorya ochirmoqchimisiz?
            {itemData.textUzb}
          </Typography>
          <MDButton onClick={() => handleDelete(itemData.id)} variant="gradient" color="dark">
            Xa
          </MDButton>
          <MDButton onClick={handleClose} variant="gradient" color="dark">
            Yuq
          </MDButton>
        </Box>
      </Modal>
    </div>
  )
}
