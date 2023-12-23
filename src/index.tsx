import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ViewForm from './pages/ViewForm';
import './index.css';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: '/viewForm',
        element: <ViewForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
