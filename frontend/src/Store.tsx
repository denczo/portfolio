import { configureStore, createSlice } from "@reduxjs/toolkit";

interface AppState {
  isOpen: boolean;
}

// Define the initial state
const initialState: AppState = {
  isOpen: false
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    open: state => {
      state.isOpen = true;
    },
    close: state => {
      state.isOpen = false;
    },
    toggle: (state, action) => {
      state.isOpen = action.payload;
    }
  }
});

const { reducer, actions } = toggleSlice;

// Create the Redux store
const store = configureStore({
  reducer
});

export { store, actions };
export type { AppState };
