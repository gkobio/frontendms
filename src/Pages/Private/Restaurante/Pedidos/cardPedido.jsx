import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';

// Mapeamento dos status
const statusMap = {
  waiting: 'Aguardando Confirmação',
  confirmed: 'Confirmado',
  preparing: 'Em Preparo',
  in_transit: 'A Caminho',
  delivered: 'Entregue',
  canceled: 'Cancelado',
  denied: 'Negado'
};

export default function CardPedido({ pedido, cliente }) {
  
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/restaurante/detalhes-pedido`);
  };
  
  return (
    <Card variant="outlined" sx={{ mb: 2, width: '800px' }}>
      <CardContent>
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={4} sx={{ textAlign: 'left' }}>
            <Typography variant="h6" component="div">
              {cliente.nome}
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: 'center' }}>
            <Typography variant="body2"> {statusMap[pedido.status]}</Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: 'right' }}>
            <Button variant="contained" endIcon={<NavigateNextIcon />}  onClick={handleDetailsClick} >
              Ver detalhes
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
