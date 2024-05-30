import { Routes, Route, Navigate } from 'react-router-dom';
import SaleOrdersPage from './pages/SaleOrdersPage';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/sale-orders" element={isAuthenticated ? <SaleOrdersPage /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
