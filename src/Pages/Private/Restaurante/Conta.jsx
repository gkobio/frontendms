import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black',
};

export default function RestaurantePerfil() {
  const [editing, setEditing] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nome: 'Restaurante XYZ',
    email: 'contato@restaurantexyz.com',
    senha: '******',
    endereco: 'Rua Exemplo, 123',
    telefone: '(11) 98765-4321',
    horario: '08:00 - 22:00',
  });
  const [initialData, setInitialData] = React.useState({ ...formData });
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setInitialData({ ...formData });
    setEditing(false);
  };

  const handleCancel = () => {
    setFormData({ ...initialData });
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOpenConfirm = () => {
    setConfirmOpen(true);
  };

  const handleCloseConfirm = () => {
    setConfirmOpen(false);
  };

  const handleConfirmDelete = () => {
    // Logic to delete account
    handleCloseConfirm();
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" color={"primary"} align='left'>
        Perfil do Restaurante
      </Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              InputProps={{ readOnly: !editing }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{ readOnly: !editing }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Senha"
              name="senha"
              type="password"
              value={formData.senha}
              onChange={handleChange}
              InputProps={{ readOnly: !editing }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Endereço"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              InputProps={{ readOnly: !editing }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              InputProps={{ readOnly: !editing }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Horário de Funcionamento"
              name="horario"
              value={formData.horario}
              onChange={handleChange}
              InputProps={{ readOnly: !editing }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {!editing ? (
              <>
                <Button variant="contained" color="primary" onClick={handleEdit} startIcon={<EditIcon />}>
                  Editar Dados
                </Button>
                <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={handleOpenConfirm} >
                  Excluir Conta
                </Button>
              </>
            ) : (
              <>
                <Button variant="contained" color="success" startIcon={<CheckIcon />} onClick={handleSave}>
                  Salvar
                </Button>
                <Button variant="contained" color="error" startIcon={<CloseIcon />} onClick={handleCancel}>
                  Cancelar
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Box>

      <Modal
        open={confirmOpen}
        onClose={handleCloseConfirm}
        aria-labelledby="modal-confirm-title"
        aria-describedby="modal-confirm-description"
      >
        <Box sx={style}>
          <Typography id="modal-confirm-title" variant="h6" >
            Confirmar Exclusão
          </Typography>
          <Typography id="modal-confirm-description" sx={{ mt: 2 }}>
            Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Button variant="contained" color="error" onClick={handleConfirmDelete}>
                Excluir
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary" onClick={handleCloseConfirm}>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
