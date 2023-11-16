import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import { router } from './routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
  </AuthProvider>
)
