import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BenefitsSection from './BenefitsSection.jsx'
import TestimonialsSection from './TestimonialsSection.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BenefitsSection/>
    <TestimonialsSection/>
    <Footer/>
  </React.StrictMode>,
)
