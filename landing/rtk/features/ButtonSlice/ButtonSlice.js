import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const ButtonSlice = createSlice({
  name: "Button",
  initialState,
  reducers: {
    buttonInput: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { buttonInput } = ButtonSlice.actions;
export default ButtonSlice.reducer;
