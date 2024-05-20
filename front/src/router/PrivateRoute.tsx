import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, RouteProps } from 'react-router-dom'

import { getAuth } from '../selectors'

type PrivateRouteProps = RouteProps & {
  component: any
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector(getAuth)

  return (
    <Route
      render={(props) =>
        isAuthenticated === true ? <Component {...props} /> : <Navigate to="/" />
      }
      {...rest}
    />
  )
}
