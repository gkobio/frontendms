import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login/Login.jsx";
import Pagina_Inicial from "./Pages/Pagina_Inicial.jsx";
import Carrinho from "./Pages/Private/Cliente/Carrinho";
import Restaurante from "./Pages/Private/Cliente/Restaurante";
/*import Cadastro_Cliente from "./Pages/Cadastro_Cliente";
import Cadastro_Restaurante from "./Pages/Cadastro_Restaurante";
import ContaCliente from "./Pages/Private/Cliente/ContaClient";
import Pedido from "./Pages/Private/Cliente/Pedido";
 // Componente correto
import Conta from "./Pages/Private/Restaurante/Conta";
import Itens from "./Pages/Private/Restaurante/Itens";
import Pedidos from "./Pages/Private/Restaurante/Pedidos";*/

const AppRouter = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Pagina_Inicial />} />
      <Route path="/login" element={<Login />} />
      <Route path="/carrinho" element={<Carrinho/>} />
      <Route path="/restaurante" element={<Restaurante/>} />
    </Routes>
    </Router>
  );
};

export default AppRouter;
