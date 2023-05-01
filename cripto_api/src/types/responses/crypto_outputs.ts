import { AllowedCryptos } from "../data";

//------------------------------------------------
export type CryptoData = {
  id: string;
  name: string;
  symbol: string;
  metrics: Metrics;
};

export type Metrics = {
  market_data: MarketData;
};

export type MarketData = {
  price_usd: number;
};

export interface CryptoStatus {
  elapsed: number;
  timestamp: Date;
}

export type CryptoResponse = {
  status: CryptoStatus;
  data: CryptoData[];
};
// -------------------------------------------------
export interface InvestmentBalance {
  id: string;
  symbol: AllowedCryptos;
  name: string;
  img: string;
  initial: InitialFinalAmount;
  final: InitialFinalAmount;
  details: Detail[];
}

export interface Detail {
  month: number;
  monthly_profit: number;
  monthly_total: number;
}

export interface InitialFinalAmount {
  crypto_amount: number;
  usd_amount: number;
}
