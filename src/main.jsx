import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Portoflio from './pages/Portofolio'

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/portfolio" element={<Portoflio />}/>
      <Route element={<h1>404 Error Page</h1>} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
