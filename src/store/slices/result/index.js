import { createSlice } from "@reduxjs/toolkit";

import api from "../../../services/api";

export const initialState = {
  contractValue: 0,
  installmentsValue: 0,
  numberOfInstallments: 0,
  iofValue: 0,
  insuranceValue: 0,
  totalEffectiveCost: 0,
  nominalRate: 0,
  annualNominalRate: 0,
  effectiveRate: 0,
  financialInstitution: {
    id: 1000,
    name: "Meu Tudo",
    bankNumber: "326",
  },
  loading: false,
  hasErros: false,
  error: "",
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    getInitialResult: (state) => {
      state.loading = true;
    },
    getResultSuccess: (state, { payload }) => {
      state.contractValue = payload.contractValue;
      state.installmentsValue = payload.installmentsValue;
      state.numberOfInstallments = payload.numberOfInstallments;
      state.iofValue = payload.iofValue;
      state.insuranceValue = payload.insuranceValue;
      state.totalEffectiveCost = payload.totalEffectiveCost;
      state.nominalRate = payload.nominalRate;
      state.annualNominalRate = payload.annualNominalRate;
      state.effectiveRate = payload.effectiveRate;
      state.loading = false;
      state.hasErros = false;
    },
    getResultFailure: (state) => {
      state.loading = false;
      state.hasErros = true;
    },
    getError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const {
  getInitialResult,
  getResultSuccess,
  getResultFailure,
  getError,
} = resultSlice.actions;

export const resultSelector = (state) => state;

export default resultSlice.reducer;

export function fetchResult() {
  return async (dispatch) => {
    dispatch(getInitialResult());

    try {
      const response = await api.get("/simulation");

      dispatch(getResultSuccess(response.data));
    } catch (error) {
      dispatch(getResultFailure());
    }
  };
}
