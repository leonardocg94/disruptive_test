import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ConcurrencyData, CryptoConcurrencyState } from "../types";

const initialState: CryptoConcurrencyState = {
  crypto_concurrency: [],
};

export const cryptoConcurrencySlice = createSlice({
  name: "crypto_concurrency",
  initialState,
  reducers: {
    setCryptoConcurrency(state, { payload }: PayloadAction<ConcurrencyData[]>) {
      state.crypto_concurrency = payload;
    },
  },
});

export const { setCryptoConcurrency } = cryptoConcurrencySlice.actions;
