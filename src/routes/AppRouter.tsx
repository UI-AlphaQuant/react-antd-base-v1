import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { AuthLayout, AppLayout } from '@/components/Layout'
import ForgotPassword from '@/pages/Auth/ForgotPassword/ForgotPassword'
import Login from '@/pages/Auth/Login/Login'
import Dashboard from '@/pages/Dashboard/Dashboard'
import { ProtectedLayout } from './ProtectedRoute'
import UserList from '@/pages/User/UserList/UserList'
import RouteError from '@/pages/Fallback/RouteError/RouteError'

export const router = createBrowserRouter([
  // Public Routes
  {
    element: <AuthLayout />,
    errorElement: <RouteError />,
    children: [
      { path: ROUTES.AUTH.LOGIN, element: <Login /> },
      { path: ROUTES.AUTH.FORGOT_PASSWORD, element: <ForgotPassword /> }
    ]
  },

  // Protected Routes
  {
    element: <ProtectedLayout />,
    errorElement: <RouteError />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: ROUTES.APP.DASHBOARD, element: <Dashboard /> },
          { path: ROUTES.APP.USERLIST, element: <UserList /> }
        ]
      }
    ]
  }
])
