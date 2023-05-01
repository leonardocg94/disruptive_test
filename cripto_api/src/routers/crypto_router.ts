import { Router } from "express";
import { getCryptoInvestmentBalanceController } from "../controllers";

const cryptoRouter = Router();

cryptoRouter.get("", getCryptoInvestmentBalanceController);

export { cryptoRouter };
