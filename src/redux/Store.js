import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./slice"; // Correct import for the default export
import { loadState, saveState } from './localStorageUtils';

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
