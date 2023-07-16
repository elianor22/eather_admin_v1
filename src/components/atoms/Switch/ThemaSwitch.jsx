import React from 'react'
import { MaterialUISwitch } from './elements'
import { useAppDispatch, useAppSelector } from '../../../store'
import { toggleTheme } from '../../../store/reducers/themeReducer'

const ThemaSwitch = () => {
  const theme = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const handleThemeChange = () => {
    dispatch(toggleTheme())
  }
  return <MaterialUISwitch checked={theme === 'dark' ? true : false} onChange={handleThemeChange} />
}

export default ThemaSwitch
