import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
// Add this to your index.js or App.jsx file to include Bootstrap's JavaScript functionality
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
