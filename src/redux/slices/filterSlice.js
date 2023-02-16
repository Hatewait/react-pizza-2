import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSortType(state, action) {
      //console.log('action:', action);
      state.sort = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    }
  },
})

export const selectFilter = state => state.filter;
export const selectSort = state => state.filter.sort;

export const { setCategoryId, setSortType, setPageCount, setSearchValue } = filterSlice.actions; //actions is reducers

export default filterSlice.reducer
