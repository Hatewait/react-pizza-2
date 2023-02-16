import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState, // initialState: initialState, (value 0)
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
    myTest: (state) => {
      state.count += 8;
    }
  },
})

export const { increment, decrement, incrementByAmount, myTest } = counterSlice.actions;

export default counterSlice.reducer

