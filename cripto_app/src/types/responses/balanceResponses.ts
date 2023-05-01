export const CRYPTOS = ["BTC", "ETH", "ADA"] as const;
export type AllowedCryptos = (typeof CRYPTOS)[number];

export type InvestmentBalance = {
  id: string;
  symbol: AllowedCryptos;
  name: string;
  img: string;
  initial: InitialFinalAmount;
  final: InitialFinalAmount;
  details: Detail[];
};

export type Detail = {
  month: number;
  monthly_profit: number;
  monthly_total: number;
};

export type InitialFinalAmount = {
  crypto_amount: number;
  usd_amount: number;
};

export type GetInvestmentBalanceResponse = {
  investment_balances: InvestmentBalance[];
};
