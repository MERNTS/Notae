import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { Router } from 'react-router-dom'
// import createSagaMiddleware from 'redux-saga'
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// import { App } from '@/containers/App'
// import rootSaga from '@/sagas'
// import rootReducer from '@/slices'
// import history from '@/utils/history'


// const sagaMiddleware = createSagaMiddleware()
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })],
//   devTools: process.env.NODE_ENV !== 'production',
// })

// sagaMiddleware.run(rootSaga)

// render(
//   <Provider store={store}>
//     <Router history={history}>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// )
