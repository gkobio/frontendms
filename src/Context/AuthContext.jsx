import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userType, setUserType] = useState(null);
  const [userId, setUserId] = useState(null);

  const loginAsRestaurant = (restaurantId) => {
    setUserType('restaurante');
    setUserId(restaurantId);
  };

  const loginAsCliente = (clienteId) => {
    setUserType('cliente');
    setUserId(clienteId);
  };

  const logout = () => {
    setUserType(null);
    setUserId(null);
    console.log("LogOut");
  };

  return (
    <AuthContext.Provider value={{ userType, userId, loginAsRestaurant, loginAsCliente, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
