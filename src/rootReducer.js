import { createReducer } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  isAuthenticated: false
};

// Reducer function
export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('login', (state) => {
      state.isAuthenticated = true;
    })
    .addCase('logout', (state) => {
      state.isAuthenticated = false;
    });
});
