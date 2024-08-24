import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ModalEditarItem from './modalEditarItem';
import ModalCriarItem from './modalCriarItem';
import CardItem from './cardItem';

// Exemplo de itens com identificadores únicos
const initialItems = [
  { idItem: 1, idRestaurante: 1, nome: 'Cheeseburger Clássico', descricao: 'Hambúrguer com queijo cheddar, alface, tomate e maionese.', preco: '15.00' },
  { idItem: 2, idRestaurante: 1, nome: 'Hambúrguer Bacon', descricao: 'Hambúrguer com queijo cheddar, bacon crocante, cebola caramelizada e molho barbecue.', preco: '18.00' },
  { idItem: 3, idRestaurante: 1, nome: 'Burger Vegano', descricao: 'Hambúrguer à base de plantas, com alface, tomate, cebola roxa e molho vegan.', preco: '17.00' },
  { idItem: 4, idRestaurante: 1, nome: 'Hambúrguer de Frango', descricao: 'Filé de frango grelhado com queijo suíço, maionese de mostarda e picles.', preco: '16.00' },
  { idItem: 5, idRestaurante: 1, nome: 'Double Cheeseburger', descricao: 'Dois hambúrgueres de carne bovina com duas camadas de queijo cheddar, alface e tomate.', preco: '22.00' },
  { idItem: 6, idRestaurante: 1, nome: 'Hambúrguer BBQ Pulled Pork', descricao: 'Carne de porco desfiada com molho barbecue, cebola roxa e coleslaw.', preco: '19.00' },
  { idItem: 7, idRestaurante: 1, nome: 'Hambúrguer de Picanha', descricao: 'Hambúrguer de picanha com queijo prato, bacon e maionese trufada.', preco: '20.00' },
  { idItem: 8, idRestaurante: 1, nome: 'Cheeseburger com Guacamole', descricao: 'Hambúrguer com queijo cheddar e guacamole caseiro, acompanhado de alface e tomate.', preco: '18.00' },
  { idItem: 9, idRestaurante: 1, nome: 'Hambúrguer de Falafel', descricao: 'Bolinho de falafel com molho tahine, alface e tomate em um pão pita.', preco: '17.00' },
  { idItem: 10, idRestaurante: 1, nome: 'Hambúrguer com Queijo Blue', descricao: 'Hambúrguer com queijo blue, cebola caramelizada e molho de pimenta.', preco: '19.00' }
];


export default function Itens() {
  const [items, setItems] = React.useState(initialItems);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleOpenEdit = (item) => {
    setSelectedItem(item);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedItem(null);
  };

  //Mudar aqui para salvar o item
  const handleSaveEdit = (formData) => {
    const updatedItems = items.map(item =>
      item.idItem === formData.idItem ? { ...formData, preco: parseFloat(formData.preco).toFixed(2) } : item
    );
    setItems(updatedItems);
    handleClose();
  };

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleSaveAdd = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
    handleCloseAdd();
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h2" color={"primary"}>
            Itens do Restaurante
          </Typography>
        </Grid>
        <Grid item>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleOpenAdd}
          >
            Adicionar Item
          </Button>
        </Grid>
      </Grid>

      {/* Lista os itens do restaurante */}
      {items.map((item) => (
        <CardItem key={item.idItem} item={item} editarItem={() => handleOpenEdit(item)} />
      ))}

      {/* Modal para editar um item */}
      {open && selectedItem && (
        <ModalEditarItem
          open={openEdit}
          item={selectedItem}
          onSave={handleSaveEdit}
          onClose={handleCloseEdit}
        />
      )}

      {/* Modal para criar um item novo */}
      {openAdd && 
        <ModalCriarItem
        open={openAdd}
        onSave={handleSaveAdd}
        onClose={handleCloseAdd}
      />
      }
    </Box>
  );
}
