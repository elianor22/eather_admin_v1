import React from 'react'
import { MaterialUISwitch } from './elements'
import { useAppDispatch, useAppSelector } from '../../../features/store/store'
import { toggleTheme } from '../../../features/store/reducers/themeReducer'

const ThemaSwitch = () => {
  const theme = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const handleThemeChange = () => {
    dispatch(toggleTheme())
  }
  return <MaterialUISwitch checked={theme === 'dark' ? true : false} onChange={handleThemeChange} />
}

export default ThemaSwitch
