import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export default function CardItem({ item, editarItem }) {
  return (
    <Card variant="outlined" sx={{ mb: 2, width: '800' }}>
      <CardContent>
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={8} sx={{ textAlign: 'left' }}>
            <Typography variant="h5" component="div">
              {item.nome}
            </Typography>
            <Typography variant="body2">{item.descricao}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" sx={{ mt: 2 }}>
              R$ {parseFloat(item.preco).toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton aria-label="edit" onClick={editarItem}>
              <EditIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
