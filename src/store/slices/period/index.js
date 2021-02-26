import { createSlice } from "@reduxjs/toolkit";

import api from "../../../services/api";

export const initialState = {
  minValue: 0,
  maxValue: 0,
  suggestedInstallments: [],
  periodSelected: 0,
  loading: false,
  hasErros: false,
  error: "",
};

const periodSlice = createSlice({
  name: "period",
  initialState,
  reducers: {
    getInitialPeriods: (state) => {
      state.loading = true;
    },
    getPeriosdSuccess: (state, { payload }) => {
      state.minValue = payload.minValue;
      state.maxValue = payload.maxValue;
      state.suggestedInstallments = payload.suggestedInstallments;
      state.loading = false;
      state.hasErros = false;
    },
    getPeriodSelected: (state, { payload }) => {
      state.periodSelected = Number(payload);
    },
    getPeriodsFailure: (state) => {
      state.loading = false;
      state.hasErros = true;
    },
    getError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const {
  getInitialPeriods,
  getPeriosdSuccess,
  getPeriodSelected,
  getPeriodsFailure,
  getError,
} = periodSlice.actions;

export const periodSelector = (state) => state;

export default periodSlice.reducer;

export function fetchPeriods() {
  return async (dispatch) => {
    dispatch(getInitialPeriods());

    try {
      const response = await api.get("/suggestedperiods");

      dispatch(getPeriosdSuccess(response.data));
    } catch (error) {
      dispatch(getPeriodsFailure());
    }
  };
}
