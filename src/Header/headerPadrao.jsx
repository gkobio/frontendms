import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

function HearderCliente() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            mr: 2,
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Food Service
        </Typography>

        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <Button
            component={Link}
            to="/" 
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Restaurantes
          </Button>
          <Button
            component={Link} 
            to="/cliente/carrinho" 
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Carrinho
          </Button>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleLogin} sx={{ p: 0 }}>
              <Chip color="secondary" avatar={<Avatar>L</Avatar>} label="Fazer Login" size="medium" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default HearderCliente;
