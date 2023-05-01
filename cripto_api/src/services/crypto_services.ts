import axios from "axios";
import {
  AllowedCryptos,
  CryptoResponse,
  GetCryptoInvestmentBalanceQueryParams,
  InvestmentBalance,
} from "../types";
import {
  calculateCryptoInvestmentBalance,
  getCryptoDataFromCsv,
} from "../utils";

export const getCryptoInvestmentBalanceService = async ({
  amount,
}: GetCryptoInvestmentBalanceQueryParams) => {

  // traemos la tasa de ganancia dependiendo la crypto seleccionda
  const cryptoRates = getCryptoDataFromCsv();

  //traemos la lista de información de las cryptos
  const cryptosData = await axios.get<CryptoResponse>(
    "https://data.messari.io/api/v2/assets?fields=id,name,symbol,metrics/market_data/price_usd"
  );

  //calculamos el balance por cada crypto en el csv
  const balances: InvestmentBalance[] = [];
  for (let cryptoRate of cryptoRates) {
    const cryptoInfo = cryptosData.data.data.find(
      (crypto) => crypto.symbol === cryptoRate.symbol
    );
    if (!cryptoInfo)
      throw new Error(
        "No tenemos información de la crypto en la que quieres invertir"
      );
    //cálculo de la inversion
    balances.push({
      id: cryptoInfo.id,
      symbol: cryptoInfo.symbol as AllowedCryptos,
      name: cryptoInfo.name,
      img: `http://localhost:8001/${cryptoInfo.symbol}.png`,
      ...calculateCryptoInvestmentBalance(
        amount,
        cryptoRate.rate,
        cryptoInfo.metrics.market_data.price_usd
      ),
    });
  }
  return balances;
};
