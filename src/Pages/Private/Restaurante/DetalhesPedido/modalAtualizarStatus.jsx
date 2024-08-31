import * as React from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';

export default function ModalAtualizarStatus({ open, handleClose, currentStatus, nextStatus }) {
  return (
    <Modal
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="status-update-title"
      aria-describedby="status-update-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2
      }}>
        <Typography id="status-update-title" variant="h6" component="h2">
          Confirmar Atualização do Status
        </Typography>
        <Typography id="status-update-description" sx={{ mt: 2 }}>
          Você está prestes a atualizar o status do pedido.
        </Typography>
        <Box sx={{ mt: 3, mb: 2, textAlign: 'center' }}>
          <Typography variant="body1">
            <b>Status Atual:</b> {currentStatus}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            <b>Próximo Status:</b> {nextStatus}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button onClick={() => handleClose(false)} sx={{ mr: 1 }}>Cancelar</Button>
          <Button onClick={() => handleClose(true)} color="primary" variant="contained">Confirmar</Button>
        </Box>
      </Box>
    </Modal>
  );
}
