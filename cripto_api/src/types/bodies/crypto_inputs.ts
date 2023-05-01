import { InferType } from "yup";
import { GetCryptoInvestmentBalanceValidator } from "../../utils";

//Aquí van los tipos para las entradas de los endpoints de crypto
export type GetCryptoInvestmentBalanceQueryParams = InferType<
  typeof GetCryptoInvestmentBalanceValidator
>;
