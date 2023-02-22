import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../store';

export type SortItems = {
  name: string,
  sortProperty: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price',
}

interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  pageCount: number;
  sort: SortItems;
}

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState, // initialState: initialState, (value 0)
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSortType(state, action: PayloadAction<SortItems>) {
      //console.log('action:', action);
      state.sort = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    }
  },
})

export const selectFilter = (state:RootState) => state.filter;
export const selectSort = (state:RootState) => state.filter.sort;

export const { setCategoryId, setSortType, setPageCount, setSearchValue } = filterSlice.actions; //actions is reducers

export default filterSlice.reducer
