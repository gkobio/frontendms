import { useState } from 'react'
import './App.css';
import AppRouter from './AppRouter';
import { useNavigate } from 'react-router-dom';


function App() {

  return (
    <>
      <header>
        <h1>PedeAi</h1>
      </header>
      <AppRouter/>
      <footer>
        <nav>
          <a onClick={() => useNavigate("/cardapio")}>Cardapio</a>
        </nav>
      </footer>
    </>
  );
}

export default App;
