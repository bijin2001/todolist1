import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import '../src/bootstrap.min.css'
import tasksStore from './Redux/tasksStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={tasksStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
