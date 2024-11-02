// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './Context.jsx'
import { FirebaseProvider } from './components/Firebase/FirebaseContext.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </ContextProvider>,
)
