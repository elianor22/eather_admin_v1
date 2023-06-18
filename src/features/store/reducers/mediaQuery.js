import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSmallScreen: false,
  isMediumScreen: false,
  isLargeScreen: false,
}

const mediaQuerySlice = createSlice({
  name: 'mediaQuery',
  initialState,
  reducers: {
    setMediaQuery(state, action) {
      state.isSmallScreen = action.payload.isSmallScreen
      state.isMediumScreen = action.payload.isMediumScreen
      state.isLargeScreen = action.payload.isLargeScreen
    },
  },
})

export const { setMediaQuery } = mediaQuerySlice.actions
export const mediaQuery = (state) => state.mediaQueries

export const mediaQueries = mediaQuerySlice.reducer
