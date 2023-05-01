import { number, object } from "yup";

export const GetCryptoInvestmentBalanceValidator = object({
  amount: number()
    .required("La cantidad que quieres invertir es requerida")
    .min(0, "No puedes invertir cantidades negativas"),
});
