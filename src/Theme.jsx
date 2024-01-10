import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LinearProgress from '@mui/material/LinearProgress';
import Form from './Form/Form';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(4),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(0),
  },
  '& .MuiDialog-paper': {
    maxWidth: '700px', // Adjust the width as needed
    height: '100%', // Adjust the height as needed
    borderRadius: '10px'
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ left: '45%', backgroundColor: 'Black', top: 200, borderRadius: '20px', }}>
        Lets fill the form.
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, paddingLeft: 4, marginBottom: '-15px' }}>
          <h3>Music Rights NFT</h3>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 30,
            top: 30,
            color: (theme) => theme.palette.grey[700],
          }}
        >
          <CloseIcon />
        </IconButton>
        <LinearProgress sx={{
          height: 5, maxWidth: '800px', marginTop: '10px', backgroundColor: '#f7f2f4', "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: '#c41259',
          }
        }} 
        />
        <DialogContent dividers sx={{ overflow: 'auto' }}>

          <Form />
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
