import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const Hello = props => (
  React.createElement('div',null, `Hello ${props.name}`)
)
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
       <Route path="/" element={<App />} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})