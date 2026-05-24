import { ACCESS_TOKEN_KEY } from '@/constants/storage'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const DISABLE_AUTH = true // ON/OFF Protected Route

export function ProtectedLayout() {
  const location = useLocation()
  const token = localStorage.getItem(ACCESS_TOKEN_KEY)

  if (!DISABLE_AUTH && !token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}
