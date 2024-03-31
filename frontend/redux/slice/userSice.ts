// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    selectedUser: null,
  },
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { selectUser } = userSlice.actions;

export default userSlice.reducer;
