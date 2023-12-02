import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Transaction from './components/Transaction.jsx'
import Data from './components/Data.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "",
        element: <Home />
      },
      {
        path: "transaction",
        element: <Transaction />
      },
      {
        path: "data",
        element: <Data />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
