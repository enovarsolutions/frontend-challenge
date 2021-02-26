import { createSlice } from "@reduxjs/toolkit";

import api from "../../../services/api";

export const initialState = {
  prevPage: "",
  loading: false,
  hasErros: false,
  error: "",
};

const loanSlice = createSlice({
  name: "loan",
  initialState,
  reducers: {
    setPrev: (state, { payload }) => {
      state.prevPage = payload;
    },
  },
});

export const { setPrev } = loanSlice.actions;

export const loanSelector = (state) => state;

export default loanSlice.reducer;
