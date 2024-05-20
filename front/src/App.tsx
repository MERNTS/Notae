import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { TakeNoteApp } from './containers/TakeNoteApp'
import { Helmet, HelmetProvider } from 'react-helmet-async'


function App() {

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Take Note</title>
                <link rel="canonical" href="https://hypech.com" />
            </Helmet>
            {/* <Route path="/app" element={TakeNoteApp} />      */}
            <BrowserRouter>
                <Routes>
                    <Route path="/app" element={<TakeNoteApp/>} />
                </Routes>
                <Navigate to="/app" />
            </BrowserRouter>
            
        </HelmetProvider>
    )
}

export default App



// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { LandingPage } from '@/components/LandingPage'
// import { TakeNoteApp } from '@/containers/TakeNoteApp'
// import { PublicRoute } from '@/router/PublicRoute'
// import { PrivateRoute } from '@/router/PrivateRoute'
// import { getAuth } from '@/selectors'
// import { login } from '@/slices/auth'

// const isDemo = process.env.DEMO

// export const App: React.FC = () => {
//   // ===========================================================================
//   // Selectors
//   // ===========================================================================

//   const { loading } = useSelector(getAuth)

//   // ===========================================================================
//   // Dispatch
//   // ===========================================================================

//   const dispatch = useDispatch()

//   const _login = () => dispatch(login())

//   // ===========================================================================
//   // Hooks
//   // ===========================================================================

//   useEffect(() => {
//     _login()
//   }, [])

//   if (loading) {
//     return (
//       <div className="loading">
//         <div className="la-ball-beat">
//           <div />
//           <div />
//           <div />
//         </div>
//       </div>
//     )
//   }

// }
