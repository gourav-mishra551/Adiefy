import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./slice"; // Correct import for the default export

const store = configureStore({
    reducer: rootReducer,
  });

export default store;
