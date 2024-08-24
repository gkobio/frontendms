import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Mapeamento dos status
const statusMap = {
  waiting: 'Aguardando Confirmação',
  confirmed: 'Confirmados',
  preparing: 'Em Preparo',
  in_transit: 'A Caminho',
  delivered: 'Entregues'
};

export default function CardPedido({ pedido, cliente }) {

  const handleDetailsClick = () => {
    navigate(`/pedido/${pedido.idPedido}`);
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
            <Typography variant="h5" component="div">
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
