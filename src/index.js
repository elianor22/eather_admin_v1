import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

import { CssBaseline, createTheme } from '@mui/material'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import createEmotionCache from './components/ultilities/createEmotionChace'
import { globalTheme } from './components/ultilities/thema/thema'
import { store } from './features/store/store'
import AppContainer from './container'

import '@fontsource/poppins'

const clientSideEmotion = createEmotionCache()

const lightTema = createTheme({
  palette: {
    mode: 'light',
    ...globalTheme.palette,
  },
  typography: {
    ...globalTheme.typography,
  },
  breakpoints: {
    ...globalTheme.breakpoints,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CacheProvider value={clientSideEmotion}>
      <ThemeProvider theme={lightTema}>
        <CssBaseline />
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
