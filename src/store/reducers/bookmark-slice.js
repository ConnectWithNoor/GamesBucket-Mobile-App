// Import the createSlice API from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.list = [...new Set(state.list), action.payload];
    },
    removeBookmark: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
