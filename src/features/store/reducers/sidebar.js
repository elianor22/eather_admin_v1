import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isExpand: true,
  isOpenSidebar: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setExpanded: (state, action) => ({
      ...state,
      isExpand: action.payload,
    }),
    setIsOpenSidebar: (state, action) => ({
      ...state,
      isOpenSidebar: action.payload,
    }),
  },
})

export const { setExpanded, setIsOpenSidebar } = sidebarSlice.actions
export const sidebar = (state) => state.sidebar

export const sidebarReducer = sidebarSlice.reducer
