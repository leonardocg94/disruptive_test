export const calculateCryptoInvestmentBalance = (
  usdAmount: number,
  monthlyRate: number,
  usdCryptoPrice: number
) => {
  //calculamos el monto inicial en dolares y en crypto
  const initialCryptoAmount = usdAmount / usdCryptoPrice;
  const initialUsdAmount = usdAmount;

  //calculamos el valor final en dolares
  let finalUsdAmount = initialUsdAmount;

  //calculamos los detalles mes por mes del balance
  const balanceDetails = [];
  for (let i = 0; i < 12; i++) {
    //ganancia mensual
    const monthly_profit = finalUsdAmount * monthlyRate;
    //total del mes
    finalUsdAmount += monthly_profit;
    balanceDetails.push({
      month: i + 1,
      monthly_profit,
      monthly_total: finalUsdAmount,
    });
  }

  //calculamos el monto final en crypto
  let finalCryptoAmount = finalUsdAmount / usdCryptoPrice;

  return {
    initial: {
      crypto_amount: initialCryptoAmount,
      usd_amount: initialUsdAmount,
    },
    final: {
      crypto_amount: finalCryptoAmount,
      usd_amount: finalUsdAmount,
    },
    details: balanceDetails,
  };
};
