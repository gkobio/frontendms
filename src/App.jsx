import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DetalhesPedido from './Pages/Private/Restaurante/DetalhesPedido';
import HearderRestaurante from './headerRestaurante'


function App() {
  return (
    <>
    
    <HearderRestaurante />
    <div className="App">
      <DetalhesPedido />
    </div>
    </>
  );
}

export default App;
