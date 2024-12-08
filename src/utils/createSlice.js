import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
   // Add an item to the cart
   addItem: (state, action) => {
    const item = action.payload;
    const existingItem = state.items.find(
      (cartItem) => cartItem.card.info.id === item.card.info.id
    );

    if (existingItem) {
      // Increment quantity if item exists
      existingItem.quantity += 1;
    } else {
      // Add new item with quantity 1
      state.items.push({ ...item, quantity: 1 });
    }
  },
   // Remove a specific item or decrement its quantity
   removeItem: (state, action) => {
    const itemId = action.payload.card.info.id;
    const existingItem = state.items.find(
      (cartItem) => cartItem.card.info.id === itemId
    );

    if (existingItem) {
      if (existingItem.quantity > 1) {
        // Decrement quantity if more than 1
        existingItem.quantity -= 1;
      } else {
        // Remove item if quantity is 1
        state.items = state.items.filter(
          (cartItem) => cartItem.card.info.id !== itemId
        );
      }
    }
  },
   // Clear all items from the cart
   clearCart: (state) => {
    state.items = [];
  },
  },
});

console.log(cartSlice);

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
