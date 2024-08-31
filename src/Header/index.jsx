import HeaderRestaurante from './headerRestaurante';
import HeaderCliente from './headerCliente';
import HeaderPadrao from './headerPadrao';
import { useAuth } from '../Context/AuthContext';
import { Button } from '@mui/material';

function Header() {
  const { userType, loginAsRestaurant, loginAsCliente } = useAuth();

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
      {userType === 'restaurante' && <HeaderRestaurante />}
      {userType === 'cliente' && <HeaderCliente />}
      {!userType && <HeaderPadrao />}

      {/* Botões de login */}
      <>
        <Button onClick={handleLoginRestaurante}>Login restaurante</Button>
        <Button onClick={handleLoginCliente}>Login cliente</Button>
      </>
    </>
  );
}

export default Header;
