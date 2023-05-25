import * as React from 'react';
import Box from '@mui/material/Box';
import MDButton from 'components/MDButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Icon from "@mui/material/Icon";
import MDInput from 'components/MDInput';



export default function BasicModal() {

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  const [open, setOpen ] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
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
          <MDInput label="Search here" />
          <MDInput label="Search here" />
          <MDInput label="Search here" />
          <MDInput label="Search here" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}