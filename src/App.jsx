import './App.css';
import { AuthProvider } from './Context/AuthContext';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom'; 
import AppRoutes from './Routes/AppRoutes';

function App() {
  // const navigate = useNavigate();
  // const pedido = useSelector(state => state.pedido);
  // const carrinho = useSelector(state => state.carrinho);

  // const handleClickPedido = () => {
  //   if (pedido.numeroPedido === 0) {
  //     alert("É preciso terminar de fazer o pedido para ver o pedido");
  //     return;
  //   }
  //   navigate("/pedido");
  // };

  // const handleClickCarrinho = () => {
  //   if (carrinho.quantidade === 0) {
  //     alert("É preciso preencher o carrinho para acessar.");
  //     return;
  //   }
  //   navigate("/carrinho");
  // };

  return (
    <Router>
      <AuthProvider>
        <Header />
        <div className="app-content">
          <AppRoutes />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
