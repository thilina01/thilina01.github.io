import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectStatusMonitor from './pages/ProjectStatusMonitor'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/status-monitor" element={<ProjectStatusMonitor />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
