// component for redux authentication slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      const { isLoggedIn} = action.payload;
      state.isLoggedIn = true;
    },
    REMOVE_ACTIVE_USER: (state, action) => {
        state.isLoggedIn = false
      },
  },
});

export const {REMOVE_ACTIVE_USER, SET_ACTIVE_USER } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export default authSlice.reducer;
