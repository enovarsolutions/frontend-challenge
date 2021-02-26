import { createSlice } from "@reduxjs/toolkit";

import api from "../../../services/api";

export const initialState = {
  loanMaxValue: 0,
  totalMaxValue: 0,
  portabilityMaxValue: 0,
  creditCardMaxValue: 0,
  refinanceMaxValue: 0,
  loading: false,
  hasErros: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getInitialHome: (state) => {
      state.loading = true;
    },
    getHomeSuccess: (state, { payload }) => {
      state.loanMaxValue = payload.loanMaxValue;
      state.totalMaxValue = payload.totalMaxValue;
      state.portabilityMaxValue = payload.portabilityMaxValue;
      state.creditCardMaxValue = payload.creditCardMaxValue;
      state.refinanceMaxValue = payload.refinanceMaxValue;
      state.loading = false;
      state.hasErros = false;
    },
    getHomeFailure: (state) => {
      state.loading = false;
      state.hasErros = true;
    },
  },
});

export const {
  getInitialHome,
  getHomeSuccess,
  getHomeFailure,
} = homeSlice.actions;

export const homeSelector = (state) => state;

export default homeSlice.reducer;

export function fetchHome() {
  return async (dispatch) => {
    dispatch(getInitialHome());

    try {
      const response = await api.get("/margins");

      dispatch(getHomeSuccess(response.data));
    } catch (error) {
      dispatch(getHomeFailure());
    }
  };
}