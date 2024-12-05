import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router-dom";
// import AuthProvider from './Components/AuthProvider.jsx';
import Router from './Components/Router.jsx';
import AuthProvider from './Components/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={Router} ></RouterProvider>
    </AuthProvider>

  </StrictMode>,
)
