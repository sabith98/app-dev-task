import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ItemsState, Item} from '../types';

// Define the initial state of the items slice
const initialState: ItemsState = {
  list: [], // Array to hold all items
  selectedItem: null, // Currently selected item
};

// Create the items slice
const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // Action to add a new item to the list
    addItem: (state, action: PayloadAction<Item>) => {
      state.list.push(action.payload);
    },
    // Action to set the selected item
    setSelectedItem: (state, action: PayloadAction<string>) => {
      state.selectedItem =
        state.list.find(item => item.id === action.payload) || null; // Find the item by id and set it as selected
    },
    // Action to remove an item from the list
    removeItem: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(item => item.id !== action.payload); // Filter out the item to be removed
    },
    // Action to update an existing item
    updateItem: (state, action: PayloadAction<Item>) => {
      const index = state.list.findIndex(item => item.id === action.payload.id); // Find the index of the item to be updated
      if (index !== -1) {
        state.list[index] = action.payload; // Update the item at the found index
      }
    },
  },
});

// Export the actions and reducer
export const {addItem, setSelectedItem, removeItem, updateItem} =
  itemsSlice.actions;
export default itemsSlice.reducer;
