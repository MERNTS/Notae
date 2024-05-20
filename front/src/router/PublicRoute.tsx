import React from 'react'
import { Route, RouteProps, Routes, Navigate, useNavigate } from 'react-router-dom'

type PublicRouteProps = RouteProps & {
  component: React.ComponentType<any>
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = true; // Hardcoded to true

  return (
    <Routes>
      <Route
        {...rest}
        element={
          isAuthenticated ? <Navigate to="/app" /> : <Component />
        }
      />
    </Routes>
  )
}
