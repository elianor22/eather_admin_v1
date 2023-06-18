import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { testReducer } from './reducers/testReducer'
import { sidebarReducer } from './reducers/sidebar'
import { themeReducer } from './reducers/themeReducer'
import { mediaQueries } from './reducers/mediaQuery'
// import { setupListeners } from '@reduxjs/toolkit/query'

export const reducer = combineReducers({
  test: testReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
  mediaQuery: mediaQueries,
})

export const createStore = () =>
  configureStore({
    reducer,
  })
// middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(baseApi) implement soon

export const store = createStore()

export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector

// setupListeners(store.dispatch)
