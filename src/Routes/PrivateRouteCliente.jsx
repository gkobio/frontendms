import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function PrivateRouteCliente() {
  const { userType } = useAuth();

  return userType === 'cliente' ? <Outlet /> : <Navigate to="/inicial" />;
}

export default PrivateRouteCliente;
