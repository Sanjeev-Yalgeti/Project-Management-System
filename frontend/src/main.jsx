import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProtectedRoute from './assets/components/ProtectedRoute.jsx'
import Login from './frontend/Login.jsx'
createRoot(document.getElementById('root')).render(
  <ProtectedRoute>
    <StrictMode>
      <Login />
    </StrictMode>
  </ProtectedRoute>,
  
)
