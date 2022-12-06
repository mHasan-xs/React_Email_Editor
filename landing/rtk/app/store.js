import { configureStore } from "@reduxjs/toolkit";
import socailCardReducer from "../features/socailCard/socialCardSlice";
import socailIconReducer from "../features/socailIcon/socailIconSlice";
import ButtonReducer from "../features/ButtonSlice/ButtonSlice";

const store = configureStore({
  reducer: {
    socailCard: socailCardReducer,
    socailIcon: socailIconReducer,
    ButtonInput: ButtonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
