import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

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

export default function ModalEditarItem({ open, item, onSave, onClose }) {
  const [formData, setFormData] = React.useState({
    idItem: '',
    idRestaurante: '',
    nome: '',
    descricao: '',
    preco: '',
  });

  React.useEffect(() => {
    if (item) {
      setFormData({
        idItem: item.idItem,
        idRestaurante: item.idRestaurante,
        nome: item.nome,
        descricao: item.descricao,
        preco: parseFloat(item.preco).toFixed(2),
      });
    }
  }, [item]);

  const handleSave = () => {
    onSave(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Editar Item
        </Typography>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '90%' }, // Ajusta a largura dos inputs
          }}
          noValidate
          autoComplete="off"
        >
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <TextField
              required
              id="outlined-required"
              label="Nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              sx={{ mb: 2 }} // Espaçamento inferior
            />
            <TextField
              required
              id="outlined-required"
              label="Descrição"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              multiline
              rows={4} // Define a altura do campo de descrição
              sx={{ mb: 2 }} // Espaçamento inferior
            />
            <TextField
              id="outlined-number"
              label="Preço"
              type="number"
              name="preco"
              value={formData.preco}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ mb: 2 }} // Espaçamento inferior
            />
          </Grid>

          <Grid 
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid item sx={6}>
              <Button variant="contained" startIcon={<CheckIcon />} color="success" onClick={handleSave}>
                Salvar
              </Button>
            </Grid>
            <Grid item sx={6}>
              <Button variant="contained" startIcon={<CloseIcon />} color="error" onClick={onClose}>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
}
