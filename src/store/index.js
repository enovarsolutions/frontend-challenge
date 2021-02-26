import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./slices/home";
import loanReducer from "./slices/loan";
import valueReducer from "./slices/value";
import periodReducer from "./slices/period";
import resultReducer from "./slices/result";

const store = configureStore({
  reducer: {
    home: homeReducer,
    loan: loanReducer,
    value: valueReducer,
    period: periodReducer,
    result: resultReducer,
  },
});

export default store;
