import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload
      console.log(newItem);


      const exitingItems = state.items.find(item => item.id === newItem.id)

      state.totalQuantity++;

      if (!exitingItems) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        })
        console.log(state.items);

      }
      else {
        exitingItems.quantity++;
        exitingItems.totalPrice = exitingItems.totalQuantity * newItem.price
      }
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;