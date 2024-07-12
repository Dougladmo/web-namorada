import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Global.css";
import axios from 'axios';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LoginPage from "./Pages/Login/LoginPage";
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import ClientRegister from './Pages/ClientRegister/ClientRegister';
import ModelRegister from './Pages/ModelRegister/ModelRegister';
import Explore from './Pages/Explore/Explore';
import Planos from './Pages/Planos/Planos';
import ClientProfile from './Pages/perfil-cliente/ClientProfile';
import ClientConfigPage from './Pages/ClientConfig/ClientConfigPage';
import SuportePage from './Pages/SuportPage/SuportePage';
import ChatPage from './Pages/Chat/ChatPage';

const ProtectedRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/check_session', { withCredentials: true })
      .then(response => {
        setIsAuthenticated(response.data.logged_in);
      })
      .catch(error => {
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? element : <Navigate to="/error" />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute element={<Explore />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/client-register',
    element: <ClientRegister />,
  },
  {
    path: '/model-register',
    element: <ModelRegister />,
  },
  {
    path: '/explore',
    element: <ProtectedRoute element={<Explore />} />,
  },
  {
    path: '/planos',
    element: <ProtectedRoute element={<Planos />} />,
  },
  {
    path: '/perfil-cliente',
    element: <ProtectedRoute element={<ClientProfile />} />,
  },
  {
    path: '/configuracao-cliente',
    element: <ProtectedRoute element={<ClientConfigPage />} />,
  },
  {
    path: '/suporte',
    element: <ProtectedRoute element={<SuportePage />} />,
  },
  {
    path: '/chat',
    element: <ProtectedRoute element={<ChatPage />} />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
