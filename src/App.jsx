import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { AuthProvider, useAuth } from './Context/AuthContext';
import Pagina_Inicial from './Pages/Pagina_Inicial';
import HearderRestaurante from './headerRestaurante';
import { Button } from '@mui/material';

function Content() {
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
      {userType === 'restaurante' && <HearderRestaurante />}
      {userType === 'cliente' && <p>Cliente</p>}
      {!userType && <p>Nao logado</p>}

      <Button onClick={handleLoginRestaurante}>Login restaurante</Button>
      <Button onClick={handleLoginCliente}>Login cliente</Button>

      <div className="App">
        <Pagina_Inicial />
      </div>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Content />
    </AuthProvider>
  );
}

export default App;
