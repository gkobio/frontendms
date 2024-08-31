import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import CardPedido from './cardPedido';

// Exemplo de dados de pedidos
const pedidos = [
  { idPedido: 1, idRestaurante: 1, idCliente: 1, descricao: 'Pedido 1', status: 'waiting', observacao: 'Sem cebola' },
  { idPedido: 2, idRestaurante: 1, idCliente: 2, descricao: 'Pedido 2', status: 'confirmed', observacao: 'Com extra de queijo' },
  { idPedido: 3, idRestaurante: 1, idCliente: 3, descricao: 'Pedido 3', status: 'preparing', observacao: 'Pimenta a parte' },
  { idPedido: 4, idRestaurante: 2, idCliente: 4, descricao: 'Pedido 4', status: 'in_transit', observacao: 'Sem açúcar' },
  { idPedido: 5, idRestaurante: 2, idCliente: 1, descricao: 'Pedido 5', status: 'delivered', observacao: 'Extra molho' },
  { idPedido: 6, idRestaurante: 2, idCliente: 1, descricao: 'Pedido 6', status: 'canceled', observacao: 'Cancelado pelo cliente' },
  { idPedido: 7, idRestaurante: 2, idCliente: 1, descricao: 'Pedido 7', status: 'denied', observacao: 'Negado pelo restaurante' },
  // Adicione mais pedidos conforme necessário
];

// Exemplo de dados de clientes
const clientes = [
  { idCliente: 1, nome: 'João Silva', email: 'joao@gmail.com', endereco: 'Rua A, 123' },
  { idCliente: 2, nome: 'Maria Oliveira', email: 'maria@gmail.com', endereco: 'Rua B, 456' },
  { idCliente: 3, nome: 'Pedro Santos', email: 'pedro@gmail.com', endereco: 'Rua C, 789' },
  { idCliente: 4, nome: 'Ana Costa', email: 'ana@gmail.com', endereco: 'Rua D, 101' },
  // Adicione mais clientes conforme necessário
];

export default function ListarPedidos() {
  const [value, setValue] = React.useState('all');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Filtra os pedidos com base no status selecionado
  const filteredPedidos = value === 'all'
    ? pedidos
    : pedidos.filter(pedido => pedido.status === value);

  // Função para encontrar o cliente correspondente ao idCliente no pedido
  const findCliente = (idCliente) => {
    return clientes.find(cliente => cliente.idCliente === idCliente);
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ padding: 2, width: '100%', maxWidth: '1200px', textAlign: 'center' }}>
        <Typography variant="h5" color="primary">
          Pedidos
        </Typography>
      </Box>
      <Paper sx={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="status dos pedidos"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Todos" value="all" />
          <Tab label="Aguardando Confirmação" value="waiting" />
          <Tab label="Confirmados" value="confirmed" />
          <Tab label="Em Preparo" value="preparing" />
          <Tab label="A Caminho" value="in_transit" />
          <Tab label="Entregues" value="delivered" />
          <Tab label="Cancelados" value="canceled" />
          <Tab label="Negados" value="denied" />
        </Tabs>
      </Paper>
      <Box sx={{ padding: 2, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {filteredPedidos.map(pedido => {
          const cliente = findCliente(pedido.idCliente);
          return (
            <CardPedido key={pedido.idPedido} pedido={pedido} cliente={cliente} />
          );
        })}
      </Box>
    </Box>
  );
}
