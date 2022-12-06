import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const socailSlice = createSlice({
  name: "socailCard",
  initialState,
  reducers: {
    createCard: (state, action) => {
      state.value.push(action.payload);
    },
    deleteCard: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    cardAction: (state, action) => {
      const { inputValue, index } = action.payload;
      state.value[index].url = inputValue;
    },
  },
});

export const { createCard, deleteCard, cardAction } = socailSlice.actions;
export default socailSlice.reducer;
