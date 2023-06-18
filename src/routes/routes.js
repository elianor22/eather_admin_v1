import React from 'react'
import Dashboard from '../pages/dashboard/Dashboard'
import CardsPage from '../pages/cards/CardsPage'
// import TableViewIcon from '@mui/icons-material/TableView'

export const routes = [
  {
    name: 'Dashboard',
    path: '/',
    element: <Dashboard />,
    // loader: rootLoader,
    icon: 'dashboard',
  },
  {
    name: 'Cards',
    path: '/card',
    element: <CardsPage />,
    // loader: rootLoader,
    icon: 'card',
  },
  {
    name: 'Tables Example',
    element: <div>Table</div>,
    icon: 'table',
    path: '/table',
    layout: '/admin',
  },
]
