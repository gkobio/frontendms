import './App.css';
import { AuthProvider } from './Context/AuthContext';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom'; 
import AppRoutes from './Routes/AppRoutes';



function App() {
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
