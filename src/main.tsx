import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import  {store, persistor } from "./app/store"
import { Provider } from 'react-redux'
import './index.css'
import { PersistGate } from "redux-persist/integration/react"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
    <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      {/* <AuthWrapper /> */}
    </PersistGate>
    </BrowserRouter>
  </StrictMode>
  </Provider>,
)
