import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes.js'
import 'normalize.css'
import { CarrinhoProvider } from './contexts/CarrinhoContext.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CarrinhoProvider>
      <App />
    </CarrinhoProvider>
  </React.StrictMode>,
)
