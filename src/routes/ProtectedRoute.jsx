import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const isAuth = true
  return isAuth ? <Outlet /> : <Navigate to={'/auth/login'} />
}

export default ProtectedRoute
