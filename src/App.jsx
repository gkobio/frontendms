import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { AuthProvider, useAuth } from './Context/AuthContext';
import Header from './Header';
import HearderRestaurante from './Header/headerRestaurante';
import { Button } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom'; 
import AppRoutes from './Routes/AppRoutes';

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
      <div className="header-and-buttons">
        {userType === 'restaurante' && <HearderRestaurante />}
        {userType === 'cliente' && <p>Cliente</p>}
        {!userType && <p>Nao logado</p>}

        {/* Botões de login */}
        
          <>
            <Button onClick={handleLoginRestaurante}>Login restaurante</Button>
            <Button onClick={handleLoginCliente}>Login cliente</Button>
          </>
        
      </div>
      <main className="main-content">
        {/* Rotas de conteúdo */}
        <AppRoutes />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
