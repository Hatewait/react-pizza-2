import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';
import {RootState} from '../store';

type FetchPizzaArgs = Record<string, string>;

type Pizza = {
  id: string;
  title: string;
  price: number;
  types: number[];
  count: number;
  imageUrl: string;
  sizes: number[];
}


export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params: FetchPizzaArgs) => {
      const { sortBy, order, category, search, currentPage} = params;
      const { data } = await axios.get<Pizza[]>(`https://63d6b4a7dc3c55baf43b21e5.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);
      console.log(data)
      return data as Pizza[];
    }
)

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzaSliceState {
  items: Pizza[];
  status: Status
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, //loading | success | error
}

export const pizzasSlice = createSlice({
  name: 'pizza',
  initialState, // initialState: initialState, (value 0)
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  }
})

export const selectPizzaItems = (state:RootState) => state.pizza;
export const { setItems } = pizzasSlice.actions; //actions is reducers

export default pizzasSlice.reducer
