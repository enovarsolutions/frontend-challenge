import { createSlice } from "@reduxjs/toolkit";

import api from "../../../services/api";

export const initialState = {
  minValue: 0,
  maxValue: 0,
  suggestedValues: [],
  valueSelected: 0,
  prevPage: "",
  loading: false,
  hasErros: false,
  error: "",
};

const valueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    getInitialValues: (state) => {
      state.loading = true;
    },
    getValueSuccess: (state, { payload }) => {
      state.minValue = payload.minValue;
      state.maxValue = payload.maxValue;
      state.suggestedValues = payload.suggestedValues;
      state.loading = false;
      state.hasErros = false;
    },
    getValueSelected: (state, { payload }) => {
      state.valueSelected = Number(payload);
    },
    getValueFailure: (state) => {
      state.loading = false;
      state.hasErros = true;
    },
    getError: (state, { payload }) => {
      state.error = payload;
    },
    setPrev: (state, { payload }) => {
      state.prevPage = payload;
    },
  },
});

export const {
  getInitialValues,
  getValueSuccess,
  getValueSelected,
  getValueFailure,
  getError,
  setPrev,
} = valueSlice.actions;

export const valueSelector = (state) => state;

export default valueSlice.reducer;

export function fetchValues() {
  return async (dispatch) => {
    dispatch(getInitialValues());

    try {
      const response = await api.get("/suggestedvalues");

      dispatch(getValueSuccess(response.data));
    } catch (error) {
      dispatch(getValueFailure());
    }
  };
}
