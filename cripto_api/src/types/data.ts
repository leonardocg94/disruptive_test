export const CRYPTOS = ["BTC", "ETH", "ADA"] as const;
export type AllowedCryptos = (typeof CRYPTOS)[number];

//Aquí van los tipos para la data del csv de cryptos
export type CryptoRate = { symbol: AllowedCryptos; rate: number };
