import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRouteRestaurante from './PrivateRouteRestaurante';
import PrivateRouteCliente from './PrivateRouteCliente';

import Pagina_Inicial from '../Pages/Pagina_Inicial';
import Login from '../Pages/Login/Login';

import ItensRestaurante from '../Pages/Private/Restaurante/Itens';
import PedidosRestaurante from '../Pages/Private/Restaurante/Pedidos';
import DetalhesPedidoRestaurante from '../Pages/Private/Restaurante/DetalhesPedido';
import ContaRestaurante from '../Pages/Private/Restaurante/Conta';

import CarrinhoCliente from '../Pages/Private/Cliente/Carrinho';
import PedidoCliente from '../Pages/Private/Cliente/Pedido';
import ContaCliente from '../Pages/Private/Cliente/Conta';

function AppRoutes() {
  return (
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/inicial" element={<Pagina_Inicial />} />
        <Route path="/login" element={<Login />} />

        {/* Rotas Privadas para Restaurantes */}
        <Route element={<PrivateRouteRestaurante />}>
          <Route path="/restaurante/itens" element={<ItensRestaurante />} />
          <Route path="/restaurante/pedidos" element={<PedidosRestaurante />} />
          <Route path="/restaurante/detalhes-pedido" element={<DetalhesPedidoRestaurante />} />
          <Route path="/restaurante/conta" element={<ContaRestaurante />} />
        </Route>

        {/* Rotas Privadas para Clientes */}
        <Route element={<PrivateRouteCliente />}>
          <Route path="/cliente/carrinho" element={<CarrinhoCliente />} />
          <Route path="/cliente/pedidos" element={<PedidoCliente />} />
          <Route path="/cliente/conta" element={<ContaCliente />} />
        </Route>

        {/* Rota padrão ou home */}
        {/* <Route path="/" element={<Pagina_Inicial />} /> */}
      </Routes>
  );
}

export default AppRoutes;
