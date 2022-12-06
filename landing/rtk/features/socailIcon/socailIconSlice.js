import { createSlice, current } from "@reduxjs/toolkit";

import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsTelegram,
  BsInstagram,
} from "react-icons/bs";

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

const initialState = {
  icons: [
    {
      id: 1,
      icon: BsFacebook,
      text: "Facebook",
      url: "",
    },
    {
      id: 2,
      icon: BsTwitter,
      text: "Twitter",
      url: "",
    },
    {
      id: 3,
      icon: BsLinkedin,
      text: "Linkedin",
      url: "",
    },
    {
      id: 4,
      icon: BsTelegram,
      text: "Telegram",
      url: "",
    },
    {
      id: 5,
      icon: BsInstagram,
      text: "Instagram",
      url: "",
    },
  ],
};

const socailIconSlice = createSlice({
  name: "socailIcon",
  initialState,
  reducers: {
    addIcon: (state, action) => {
      state.icons.push(action.payload);
    },
    removeIcon: (state, action) => {
      state.icons = state.icons.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addIcon, removeIcon } = socailIconSlice.actions;
export default socailIconSlice.reducer;
