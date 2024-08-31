import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function CardItem({ item, editarItem }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card variant="outlined" sx={{ mb: 2, width: '100%', aspectRatio: '1/1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
          <div>
            <Typography variant="h6" component="div">
              {item.nome}
            </Typography>
            <Typography variant="body2">{item.descricao}</Typography>
          </div>
          <div>
            <Typography variant="body2" sx={{ mt: 2 }}>
              R$ {parseFloat(item.preco).toFixed(2)}
            </Typography>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'auto' }}>
            <Button variant="contained" color="primary" onClick={editarItem}>
              Editar
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
