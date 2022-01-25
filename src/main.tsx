import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import NotesProvider from './context/NotesProvider'

ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
