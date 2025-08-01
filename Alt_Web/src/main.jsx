import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AltWebContextProvider from './context/AltWebContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AltWebContextProvider>
      <App />
    </AltWebContextProvider>
  </BrowserRouter>,
)
