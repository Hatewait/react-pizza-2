import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params) => {
      const { sortBy, order, category, search, currentPage} = params;
      const { data } = await axios.get(`https://63d6b4a7dc3c55baf43b21e5.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);
      console.log(data)
      return data;
    }
)

const initialState = {
  items: [],
  status: 'loading', //loading | success | error
}

export const pizzasSlice = createSlice({
  name: 'pizza',
  initialState, // initialState: initialState, (value 0)
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },

    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },

    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    }
  }
})

export const selectPizzaItems = state => state.pizza;
export const { setItems } = pizzasSlice.actions; //actions is reducers

export default pizzasSlice.reducer