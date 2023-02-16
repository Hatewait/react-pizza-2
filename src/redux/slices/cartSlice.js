import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState, // initialState: initialState, (value 0)
  reducers: {
    addItem(state, action) {
      const foundItem = state.items.find((item) => item.id === action.payload.id);
      if (foundItem) {
        foundItem.count ++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((acc, item) => {
        return item.price * item.count + acc;
      }, 0)
      console.log('action.payload:', action.payload.price)
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearItems(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },

    minusItem(state, action) {
      const foundItem = state.items.find((item) => item.id === action.payload);
      if (foundItem && foundItem.count <= 0) {
        foundItem.count = 0;
      } else if (foundItem) {
        state.totalPrice -= foundItem.price;
        foundItem.count --;
      }
    }
  },
})

export const selectCart = (state) => state.cart;
export const selectCartItemById = (id) => state => state.cart.items.find((obj) => obj.id === id)

export const { addItem, removeItem, minusItem, clearItems} = cartSlice.actions; //actions is reducers

export default cartSlice.reducer
