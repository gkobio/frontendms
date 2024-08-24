import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TabelaItens from './tabelaItens';
import { Grid, Button } from '@mui/material';
import ModalAtualizarStatus from './modalAtualizarStatus'; // Importe o novo componente

// Mapeamento dos status
const statusMap = {
  waiting: 'Aguardando Confirmação',
  confirmed: 'Confirmado',
  preparing: 'Em Preparo',
  in_transit: 'A Caminho',
  delivered: 'Entregue',
  canceled: 'Cancelado',
  denied: 'Negado',
};

// Obter o próximo status
const getNextStatus = (currentStatus) => {
  const statusOrder = ['waiting', 'confirmed', 'preparing', 'in_transit', 'delivered'];
  const currentIndex = statusOrder.indexOf(currentStatus);
  return currentIndex < statusOrder.length - 1 ? statusOrder[currentIndex + 1] : null;
};

// Constante para um pedido
const pedido = {
  idPedido: 1,
  idRestaurante: 101,
  idCliente: 1001,
  status: 'waiting', // Pode ser 'waiting', 'confirmed', 'preparing', 'in_transit', 'delivered', 'canceled', ou 'denied'
  observacao: 'Entregar sem contato',
  pagamento: 'Cartão de Crédito'
};

// Constante para um cliente
const cliente = {
  idCliente: 1001,
  nome: 'Ana Souza',
  email: 'ana.souza@email.com',
  endereco: 'Rua das Flores, 123, São Paulo'
};

// Constante para os itens do pedido
const itensPedido = [
  { idPedido: 1, item: { idItem: 201, idRestaurante: 101, nome: 'Pizza Margherita', descricao: 'Pizza com molho de tomate e queijo', preco: 40.00 }, quantidade: 1 },
  { idPedido: 1, item: { idItem: 202, idRestaurante: 101, nome: 'Refrigerante', descricao: 'Lata de refrigerante de 350ml', preco: 5.00 }, quantidade: 2 },
];

export default function DetalhesPedido() {
  const [open, setOpen] = React.useState(false);
  const [actionType, setActionType] = React.useState(null);

  const handleClickOpen = (type) => {
    setActionType(type);
    setOpen(true);
  };

  const handleClose = (confirm) => {
    if (confirm && actionType) {
      if (actionType === 'confirm') {
        console.log('Status atualizado para:', getNextStatus(pedido.status));
        pedido.status = getNextStatus(pedido.status);
      } else if (actionType === 'deny') {
        console.log('Pedido negado');
        pedido.status = 'denied'; // Atualize o status para negado
      }
    }
    setOpen(false);
    setActionType(null);
  };

  const nextStatus = getNextStatus(pedido.status);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h2" component="div" sx={{ marginBottom: 2 }} color="primary">
        Detalhes do Pedido
      </Typography>
      <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item>
          <Box sx={{ textAlign: 'left', marginBottom: 2 }}>
            <Typography variant="h6"><b>Status:</b> {statusMap[pedido.status]}</Typography>
            <Typography variant="h6"><b>Cliente:</b> {cliente.nome}</Typography>
            <Typography variant="h6"><b>Endereço:</b> {cliente.endereco}</Typography>
            <Typography variant="h6"><b>Pagamento:</b> {pedido.pagamento}</Typography>
            <Typography variant="h6"><b>Observação:</b> {pedido.observacao}</Typography>
          </Box>
        </Grid>
        {pedido.status !== 'delivered' && pedido.status !== 'canceled' && pedido.status !== 'denied' && (
          <Grid item>
            {pedido.status === 'waiting' ? (
              <>
                <Button variant="contained" onClick={() => handleClickOpen('confirm')} sx={{ marginRight: 2 }}>
                  Confirmar Pedido
                </Button>
                <Button variant="outlined" color="error" onClick={() => handleClickOpen('deny')}>Negar Pedido</Button>
              </>
            ) : (
              <Button variant="contained" onClick={() => handleClickOpen('confirm')}>Atualizar Status</Button>
            )}
          </Grid>
        )}
      </Grid>

      <Typography variant="h4" component="div" sx={{ marginBottom: 2 }} color={"primary"}>
        Itens
      </Typography>

      <TabelaItens itensPedido={itensPedido} />

      <ModalAtualizarStatus
        open={open}
        handleClose={handleClose}
        currentStatus={statusMap[pedido.status]}
        nextStatus={actionType === 'confirm' ? statusMap[nextStatus] : 'Negado'}
      />
    </Box>
  );
}
