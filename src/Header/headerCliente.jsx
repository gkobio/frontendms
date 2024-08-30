import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom'; 
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const settings = ['Ver Conta', 'Logout'];

function HearderCliente() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuClick = (setting) => {
    if (setting === 'Logout') {
      logout();
    }
    else if (setting === "Ver Conta"){
      navigate('/cliente/conta');
    }
    handleCloseUserMenu();
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
          {/* <Button
            component={Link}
            to="/restaurantes" 
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Restaurantes
          </Button> */}
          <Button
            component={Link} 
            to="/cliente/pedidos" 
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Meus Pedidos
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
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Chip color="secondary" avatar={<Avatar>M</Avatar>} label="Nome Cliente" size="medium" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => handleMenuClick(setting)}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default HearderCliente;
