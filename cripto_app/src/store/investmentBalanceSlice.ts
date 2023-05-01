import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InvestmentBalance, InvestmentBalanceState } from "../types";

const initialState: InvestmentBalanceState = {
  form: {
    amount: 0,
  },
  summary: {
    data: [],
  },
  loading: false,
};

export const investmentBalanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setBalanceForm(state, { payload }: PayloadAction<number | "">) {
      state.form.amount = payload;
    },
    setBalanceLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
    setBalanceSummary(state, { payload }: PayloadAction<InvestmentBalance[]>) {
      state.summary.data = payload;
    },
  },
});

export const { setBalanceForm, setBalanceLoading, setBalanceSummary } =
  investmentBalanceSlice.actions;
