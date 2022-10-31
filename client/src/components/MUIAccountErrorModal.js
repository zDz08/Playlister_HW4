import { useContext } from 'react'
import AuthContext from '../auth'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '5px solid #0066CC',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
    const { auth } = useContext(AuthContext);
    const handleClose = () => auth.hideModal();

    return (
        <div>
          <Modal
            open={auth.error}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
              <h2>Error</h2>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, mb: 5}}>
                {auth.errorMessage}
              </Typography>
              <Button variant="outlined" 
                      fullWidth
                      onClick={handleClose}>
                Close
                </Button>
            </Box>
          </Modal>
        </div>
    );
}