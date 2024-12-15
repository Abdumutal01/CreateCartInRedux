import { createSlice } from '@reduxjs/toolkit';

export const items = []

const initialState = {
  items: items,
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload

      const exitingItems = state.items.find(item => item.itemId === newItem.id)
      console.log(newItem, exitingItems);

      state.totalQuantity++;

      if (!exitingItems) {
        state.items.push({
          itemId: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        })

      }
      else {
        exitingItems.quantity++;
        exitingItems.totalPrice = exitingItems.totalPrice + newItem.price

      }

    },
    addCart(state, action) {
      const newItem = action.payload
      console.log(newItem);

      const exitingItems = state.items.find(item => item.itemId === newItem.id)
      state.totalQuantity++;
      if (exitingItems) {
        exitingItems.quantity++;
        exitingItems.totalPrice = exitingItems.totalPrice + newItem.price
      } else {
        return exitingItems
      }
    },

    removeCart(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      state.totalQuantity--;
      const existingItemIndex = state.items.findIndex(item => item.itemId === newItem.id);
    
      if (existingItemIndex !== -1) { // Element mavjudligini tekshiramiz
        const existingItem = state.items[existingItemIndex];
    
        if (existingItem.quantity > 0) { 
          existingItem.quantity--;
          existingItem.totalPrice -= newItem.price;
    
          // Agar quantity 0 bo'lsa, uni massivdan o'chiramiz
          if (existingItem.quantity === 0) {
            state.items.splice(existingItemIndex, 1); // Massivdan o'chirish
          }
        }
      }
    }

  }
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;