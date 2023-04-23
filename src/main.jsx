import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/Pages/App/App'
import './tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Router><App /></Router>

)
