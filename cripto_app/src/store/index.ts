import { configureStore } from "@reduxjs/toolkit";
import { investmentBalanceSlice } from "./investmentBalanceSlice";
import { cryptoConcurrencySlice } from "./cryptoConcurrencySlice";

export const store = configureStore({
  reducer: {
    [investmentBalanceSlice.name]: investmentBalanceSlice.reducer,
    [cryptoConcurrencySlice.name]: cryptoConcurrencySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
