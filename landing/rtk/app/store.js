import { configureStore } from "@reduxjs/toolkit";
import PreviewReducer from "../features/Preview/PreviewSlice"
import PreviewResonsiveSlice from "../features/Preview/PreviewResonsiveSlice"
// import socailCardReducer from "../features/socailCard/socialCardSlice";
// import socailIconReducer from "../features/socailIcon/socailIconSlice";
// import ButtonReducer from "../features/ButtonSlice/ButtonSlice";

const store = configureStore({
  reducer: {
    preview: PreviewReducer,
    Responsive: PreviewResonsiveSlice
    // socailCard: socailCardReducer,
    // socailIcon: socailIconReducer,
    // ButtonInput: ButtonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
