import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isExpand: true,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setExpanded: (state, action) => ({
      ...state,
      isExpand: action.payload,
    }),
  },
})

export const { setExpanded } = sidebarSlice.actions
export const sidebar = (state) => state.sidebar

export const sidebarReducer = sidebarSlice.reducer
