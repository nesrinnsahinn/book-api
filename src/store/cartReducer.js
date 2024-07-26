// cartReducer.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    addedItems: [
    ]
  },
  reducers: {
    addBook(state, action) {
        let book = state.addedItems.find(item => item.id == action.payload.id);
        if(book) book.count = book.count + 1
        else {
            state.addedItems.push({
                count: 1,
                id: action.payload.id,
                price: action.payload.price
            })
        }
    },
    decreaseBook(state, action) {
        let book = state.addedItems.find(item => item.id == action.payload);
        if(!book) return
        if(book.count > 1) book.count = book.count - 1
        else state.addedItems = state.addedItems.filter(item => item.id != action.payload);
    },
    increaseBook(state, action) {
        let book = state.addedItems.find(item => item.id == action.payload);
        if(!book) return
        book.count = book.count + 1
    },
    removeBook(state, action) {
        state.addedItems = state.addedItems.filter(item => item.id != action.payload);
    },
    overrideBooks(state, action) {
      try {
        state.addedItems = JSON.parse(action.payload)
      } catch (error) {
        state.addedItems = []
      }
    }
  }
});

export const { addBook, decreaseBook, increaseBook, removeBook, overrideBooks } = cartSlice.actions;
export default cartSlice.reducer;
