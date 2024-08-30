import HeaderRestaurante from './headerRestaurante';
import { AuthProvider, useAuth } from '../Context/AuthContext';
import { Button } from '@mui/material';
import HeaderCliente from './headerCliente';
import HeaderPadrao from './headerPadrao';

function Header() {
  const { userType, userId, logout, loginAsRestaurant, loginAsCliente } = useAuth();

  const handleLoginRestaurante = () => {
    const restaurantId = '12345';
    loginAsRestaurant(restaurantId);
    console.log(userType + "......");
  };

  const handleLoginCliente = () => {
    const clienteId = '12345';
    loginAsCliente(clienteId);
    console.log(userType + "------");
  };

  return (
    <>
      <div className="header-and-buttons">
        {userType === 'restaurante' && <HeaderRestaurante />}
        {userType === 'cliente' && <HeaderCliente />}
        {!userType && <HeaderPadrao />}

        {/* Botões de login */}
        <>
        <Button onClick={handleLoginRestaurante}>Login restaurante</Button>
        <Button onClick={handleLoginCliente}>Login cliente</Button>
        </>
    
      </div>
    </>
  );
}

export default Header;
