import React from 'react'
import Dashboard from '../pages/dashboard/Dashboard'
import CardsPage from '../pages/cards/CardsPage'
import ButtonPages from '../pages/Components/ButtonPages/ButtonPages'
import IconPages from '../pages/Components/IconPages/IconPages'
import { InputPages } from '../pages/Components/InputPages/InputPages'
import ComponentPages from '../pages/Components'
import Autocomplate from '../pages/Components/Autocomplate/Autocomplate'

// import TableViewIcon from '@mui/icons-material/TableView'

export const routes = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    path: '',
    element: <Dashboard />,
    // loader: rootLoader,
    icon: 'dashboard',
    layout: 'admin',
  },
  {
    key: 'cards',
    name: 'Cards',
    path: 'card',
    element: <CardsPage />,
    // loader: rootLoader,
    icon: 'card',
    layout: 'admin',
  },
  {
    key: 'tables',
    name: 'Tables Example',
    element: <div>Table</div>,
    icon: 'table',
    path: 'table',
    layout: 'admin',
  },
  {
    key: 'components',
    name: 'Components Example',
    element: <ComponentPages />,
    icon: 'component',
    path: 'component',
    layout: 'admin',
    child: [
      {
        name: 'Icons',
        abbr: 'Icn',
        path: 'icons',
        element: <IconPages />,
        layout: 'admin',
      },
      {
        name: 'Button',
        abbr: 'Btn',
        path: 'button',
        element: <ButtonPages />,
        layout: 'admin',
      },
      {
        name: 'Input',
        abbr: 'Ipt',
        path: 'input',
        element: <InputPages />,
        layout: 'admin',
      },
      {
        name: 'Autocomplete',
        abbr: 'Atc',
        path: 'autocomplete',
        element: <Autocomplate />,
        layout: 'admin',
      },
    ],
  },
]
