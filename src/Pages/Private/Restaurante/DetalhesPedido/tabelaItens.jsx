import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TabelaItens({itensPedido}) {
  const total = itensPedido.reduce((acc, itemPedido) => acc + itemPedido.quantidade * itemPedido.item.preco, 0);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Item</b></TableCell>
            <TableCell align="right"><b>Preço Unitário</b></TableCell>
            <TableCell align="right"><b>Quantidade</b></TableCell>
            <TableCell align="right"><b>Subtotal</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itensPedido.map((itemPedido) => (
            <TableRow
              key={itemPedido.item.idItem}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {itemPedido.item.nome}
              </TableCell>
              <TableCell align="right" >{itemPedido.item.preco.toFixed(2)}</TableCell>
              <TableCell align="right">{itemPedido.quantidade}</TableCell>
              <TableCell align="right">{(itemPedido.quantidade * itemPedido.item.preco).toFixed(2)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3} align="right"><strong>Total</strong></TableCell>
            <TableCell align="right"><strong>R$ {total.toFixed(2)}</strong></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
