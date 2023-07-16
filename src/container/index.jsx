import React, { useEffect } from 'react'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import AppComponents from './components/AppComponents'
import { useConsumTheme } from '../utils/thema/useCustomTheme'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import createEmotionCache from '../utils/createEmotionChace'
import { routes } from '../routes/routes'
import Notfound from '../pages/404NotFound/Notfound'
import { useAppDispatch } from '../store'
import { setMediaQuery } from '../store/reducers/mediaQuery'

const clientSideEmotion = createEmotionCache()

const AppContainer = () => {
  const dispatch = useAppDispatch()
  const theme = useConsumTheme()
  const isSmallScreen = useMediaQuery('(max-width: 600px)')
  const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 960px)')
  const isLargeScreen = useMediaQuery('(min-width: 961px)')

  useEffect(() => {
    dispatch(setMediaQuery({ isSmallScreen, isMediumScreen, isLargeScreen }))
  }, [dispatch, isSmallScreen, isMediumScreen, isLargeScreen])

  const renderRoutes = () => {
    return routes.map(({ key, path, layout, element: Component, child: children }) => {
      if (layout === 'admin') {
        if (children) {
          return (
            <Route key={key} path={path} >
              <Route index element={Component} />
              {children.map((child) => (
                <Route key={child.path} path={child.path} element={child.element} />
              ))}
            </Route>
          )
        }
        return (
          <Route key={key} path={path} element={<React.Suspense fallback="loading...">{Component}</React.Suspense>} />
        )
      }
    })
  }
  return (
    <CacheProvider value={clientSideEmotion}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="admin" element={<AppComponents />}>
              {renderRoutes()}
            </Route>
            <Route path="/" element={<Navigate to={'admin'} replace />} />
            <Route path="/auth/login" element={<div>Login</div>} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default AppContainer
