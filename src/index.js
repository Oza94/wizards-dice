import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './style/fonts.css'
import './style/theme.css'
import App from './components/organisms/App/App'

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)
