import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  text: 'hello world',
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setText: (state, action) => ({
      ...state,
      text: action.payload,
    }),
  },
})

export const { setText } = testSlice.actions
export const test = (state) => state.test

export const testReducer = testSlice.reducer
