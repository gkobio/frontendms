import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function PrivateRouteRestaurante() {
  const { userType } = useAuth();

  return userType === 'restaurante' ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRouteRestaurante;
