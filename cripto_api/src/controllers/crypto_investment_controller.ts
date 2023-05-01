import { Request, Response } from "express";
import {
  BaseResponse,
  GetCryptoInvestmentBalanceQueryParams,
  InvestmentBalance,
} from "../types";
import { GetCryptoInvestmentBalanceValidator } from "../utils";
import { getCryptoInvestmentBalanceService } from "../services";

export const getCryptoInvestmentBalanceController = async (
  req: Request<{}, {}, {}, GetCryptoInvestmentBalanceQueryParams>,
  res: Response<BaseResponse<{ investment_balances: InvestmentBalance[] }>>
) => {
  try {
    //validación de los query params necesarios
    const queryParams = await GetCryptoInvestmentBalanceValidator.validate(
      req.query
    );
    //llamada al servicio que realiza la lógica
    const investmentBalance = await getCryptoInvestmentBalanceService(
      queryParams
    );
    res.json({
      success: true,
      data: { investment_balances: investmentBalance },
    });
  } catch (error) {
    console.log({ error, error_type: typeof error });
    const err = error as Error;
    return res.status(400).json({ success: false, error: err.message });
  }
};
