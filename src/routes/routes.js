import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import TableViewIcon from '@mui/icons-material/TableView';

export const routes = [
  {
    name: 'Dashboard',
    component: () => <div>dashboard</div>,
    hide: true,
    authIcon: <DashboardIcon color="inherit" />,
    path: '/dashboard',
    layout: '/admin',
  },
  {
    name: 'Tables Example',
    component: () => <div>dashboard</div>,
    hide: true,
    authIcon: <TableViewIcon color="inherit" />,
    path: '/table',
    layout: '/admin',
  },
]
