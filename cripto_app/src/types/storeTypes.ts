import { InvestmentBalance } from ".";
import { ConcurrencyData } from "./responses/cryptoconcurrencyResponses";

export type InvestmentBalanceState = {
  form: {
    amount: number | "";
  };
  summary: {
    data: InvestmentBalance[];
  };
  loading: boolean;
};

export type CryptoConcurrencyState = {
  crypto_concurrency: ConcurrencyData[];
};
